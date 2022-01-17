
import traceback

from glob import glob
from pathlib import Path

def get_index():
    with open('index.html', 'r') as fh:
        return fh.read()

def get_langs():
    langs = []
    paths = glob('i18n/*.csv')
    [langs.append(path.replace('i18n/', '').replace('.csv', '')) for path in paths]
    return langs

def read_lang(lang):
    map = {}
    with open(f'i18n/{lang}.csv', 'r') as fh:
        lines = fh.readlines()
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
        parts = line.split('|')
        map[parts[0]] = parts[1]
    return map

def replace_fields(lang, index):
    tmp = index
    for k, v in lang.items():
        v = v.replace('\\n', '<br />')
        tmp = tmp.replace('{{'+k+'}}', v)
    return tmp

def write_index(lang, index):
    with open(f'index_{lang}.html', 'w') as fh:
        fh.write(index)

if __name__ == '__main__':
    try:
        langs = get_langs()
        index = get_index()
        
        for lang in langs:
            map = read_lang(lang)
            tmp = replace_fields(map, index)
            write_index(lang, tmp)
    except Exception:
        traceback.print_exc()
