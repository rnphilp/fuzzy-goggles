# Introduction

This script generates the word lists stored in `src/data`.

To run the script run:

```bash
node index.js
```

The output data is stored directly in the `scr/data` folder.

## Data Set

The primary dataset is `data/brit-a-z-clean.txt`. This has had offensive words removed on a best efforts basis with inspiration taken from https://github.com/InnovativeInventor/dict4schools/blob/master/blacklists/blacklist_medium.txt

### Data set sources

The source file for the script is ./data/english-word-list.txt which is downloaded from (https://www.wordgamedictionary.com/english-word-list/

3000-common-uk-english.txt - word list from https://www.ef.co.uk/english-resources/english-vocabulary/top-3000-words/

1000-common-uk-english.txt - word list from https://www.ef.co.uk/english-resources/english-vocabulary/top-1000-words/

brit-a-z.txt - word list from https://www.curlewcommunications.uk/wordlist.html

Wikimedia word frequency list is from https://github.com/IlyaSemenov/wikipedia-word-frequency/blob/master/results/enwiki-2022-08-29.txt

Sources for alternative word frequency can be found [here](https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists/English)
