#!/bin/bash

# APT options
#
## -y: answer "y"
## --quiet: reduce log messages
## --purge: remove config files
## --dry-run: only simulate the changes
APT_OPTS=" -y --purge --quiet --quiet $1"

## Remove unused Firefox localizations
apt-get remove $APT_OPTS  firefox-esr-l10n-ar firefox-esr-l10n-ast \
    firefox-esr-l10n-be firefox-esr-l10n-bg firefox-esr-l10n-bn \
    firefox-esr-l10n-bs firefox-esr-l10n-ca firefox-esr-l10n-cs \
    firefox-esr-l10n-cy firefox-esr-l10n-da firefox-esr-l10n-de \
    firefox-esr-l10n-el firefox-esr-l10n-eo firefox-esr-l10n-es-ar \
    firefox-esr-l10n-es-cl firefox-esr-l10n-es-es firefox-esr-l10n-es-mx \
    firefox-esr-l10n-et firefox-esr-l10n-eu firefox-esr-l10n-fa \
    firefox-esr-l10n-fi firefox-esr-l10n-fr firefox-esr-l10n-ga-ie \
    firefox-esr-l10n-gl firefox-esr-l10n-gu-in firefox-esr-l10n-he \
    firefox-esr-l10n-hi-in firefox-esr-l10n-hr firefox-esr-l10n-hu \
    firefox-esr-l10n-id firefox-esr-l10n-is firefox-esr-l10n-ja \
    firefox-esr-l10n-kk firefox-esr-l10n-km firefox-esr-l10n-kn \
    firefox-esr-l10n-ko firefox-esr-l10n-lt firefox-esr-l10n-lv \
    firefox-esr-l10n-mk firefox-esr-l10n-mr firefox-esr-l10n-nb-no \
    firefox-esr-l10n-ne-np firefox-esr-l10n-nl firefox-esr-l10n-nn-no \
    firefox-esr-l10n-pa-in firefox-esr-l10n-pl firefox-esr-l10n-pt-br \
    hunspell-gl-es hunspell-sv-se

## Remove LibreOffice
apt-get remove $APT_OPTS  libreoffice-base-core libreoffice-calc \
    libreoffice-common libreoffice-core libreoffice-draw \
    libreoffice-gtk3 libreoffice-help-ca libreoffice-help-common \
    libreoffice-help-cs libreoffice-help-da libreoffice-help-de \
    libreoffice-help-dz libreoffice-help-el libreoffice-help-en-gb \
    libreoffice-help-en-us libreoffice-help-es libreoffice-help-et \
    libreoffice-help-eu libreoffice-help-fi libreoffice-help-fr \
    libreoffice-help-gl libreoffice-help-hi libreoffice-help-hu \
    libreoffice-help-it libreoffice-help-ja libreoffice-help-km \
    libreoffice-help-ko libreoffice-help-nl libreoffice-help-pl \
    libreoffice-help-pt libreoffice-help-ru libreoffice-help-sk \
    libreoffice-help-sl libreoffice-help-sv libreoffice-help-zh-cn \
    libreoffice-help-zh-tw libreoffice-impress libreoffice-l10n-ar \
    libreoffice-l10n-ast libreoffice-l10n-be libreoffice-l10n-bg \
    libreoffice-l10n-bn libreoffice-l10n-bs libreoffice-l10n-ca \
    libreoffice-l10n-cs libreoffice-l10n-cy libreoffice-l10n-da \
    libreoffice-l10n-de libreoffice-l10n-dz libreoffice-l10n-el \
    libreoffice-l10n-en-gb libreoffice-l10n-en-za libreoffice-l10n-eo \
    libreoffice-l10n-es libreoffice-l10n-et libreoffice-l10n-eu \
    libreoffice-l10n-fa libreoffice-l10n-fi libreoffice-l10n-fr \
    libreoffice-l10n-ga libreoffice-l10n-gl libreoffice-l10n-gu \
    libreoffice-l10n-he libreoffice-l10n-hi libreoffice-l10n-hr \
    libreoffice-l10n-hu libreoffice-l10n-id libreoffice-l10n-is \
    libreoffice-l10n-it libreoffice-l10n-ja libreoffice-l10n-ka \
    libreoffice-l10n-km libreoffice-l10n-ko libreoffice-l10n-lt \
    libreoffice-l10n-lv libreoffice-l10n-mk libreoffice-l10n-ml \
    libreoffice-l10n-mr libreoffice-l10n-nb libreoffice-l10n-ne \
    libreoffice-l10n-nl libreoffice-l10n-nn libreoffice-l10n-pa-in \
    libreoffice-l10n-pl libreoffice-l10n-pt libreoffice-l10n-pt-br \
    libreoffice-l10n-ro libreoffice-l10n-ru libreoffice-l10n-si \
    libreoffice-l10n-sk libreoffice-l10n-sl libreoffice-l10n-sr \
    libreoffice-l10n-sv libreoffice-l10n-ta libreoffice-l10n-te \
    libreoffice-l10n-th libreoffice-l10n-tr libreoffice-l10n-ug \
    libreoffice-l10n-uk libreoffice-l10n-vi libreoffice-l10n-xh \
    libreoffice-l10n-zh-cn libreoffice-l10n-zh-tw libreoffice-math \
    libreoffice-style-colibre libreoffice-voikko libreoffice-writer \
    myspell-eo myspell-es myspell-et myspell-fa myspell-ga myspell-he \
    myspell-nb myspell-nn myspell-sk myspell-sq myspell-uk mythes-cs \
    mythes-de mythes-de-ch mythes-en-us mythes-fr mythes-it mythes-ne \
    mythes-pl mythes-ru mythes-sk python3-uno

# Remove unused apps
apt-get remove $APT_OPTS xterm mlterm mlterm-common mlterm-tiny xiterm+thai

apt-get remove $APT_OPTS exim4-base exim4-config quodlibet parole geoclue-2.0

apt-get remove $APT_OPTS imagemagick-6-common libmagickcore-6.q16-6 \
    libmagickcore-6.q16-6-extra libmagickwand-6.q16-6

apt-get remove $APT_OPTS aspell-am aspell-ar aspell-ar-large aspell-bg \
    aspell-bn aspell-ca aspell-cs aspell-cy aspell-da aspell-de aspell-el \
    aspell-eo aspell-es aspell-et aspell-eu aspell-fa aspell-fr aspell-ga \
    aspell-gl-minimos aspell-gu aspell-he aspell-hi aspell-hr aspell-hu \
    aspell-is aspell-kk aspell-ku aspell-lt aspell-lv aspell-ml aspell-mr \
    aspell-nl aspell-no aspell-pa aspell-pl aspell-pt-br aspell-pt-pt \
    aspell-ro aspell-ru aspell-sk aspell-sl aspell-sv aspell-ta aspell-te \
    aspell-tl aspell-uk

apt-get remove $APT_OPTS hunspell-ar hunspell-be hunspell-bg hunspell-bs \
    hunspell-ca hunspell-cs hunspell-da hunspell-de-at hunspell-de-ch \
    hunspell-de-de hunspell-el hunspell-en-gb hunspell-eu hunspell-fr \
    hunspell-fr-classical hunspell-gl hunspell-gu hunspell-hi hunspell-hr \
    hunspell-hu hunspell-id hunspell-is hunspell-kk hunspell-kmr \
    hunspell-ko hunspell-lt hunspell-lv hunspell-ml hunspell-ne \
    hunspell-nl hunspell-pl hunspell-pt-br hunspell-pt-pt hunspell-ro \
    hunspell-ru hunspell-si hunspell-sl hunspell-sr hunspell-sv \
    hunspell-te hunspell-th hunspell-vi

apt-get remove $APT_OPTS hyphen-af hyphen-as hyphen-be hyphen-bg \
    hyphen-bn hyphen-ca hyphen-cs hyphen-da hyphen-de hyphen-el \
    hyphen-es hyphen-fr hyphen-gl hyphen-gu hyphen-hr hyphen-hu \
    hyphen-hi hyphen-id hyphen-is hyphen-kn hyphen-lt hyphen-lv \
    hyphen-ml hyphen-mn hyphen-mr hyphen-nl hyphen-no hyphen-or \
    hyphen-pa hyphen-pl hyphen-pt-br hyphen-pt-pt hyphen-ro \
    hyphen-ru hyphen-show hyphen-sk hyphen-sl hyphen-sr hyphen-sv \
    hyphen-ta hyphen-te hyphen-th hyphen-uk hyphen-zu

apt-get remove $APT_OPTS iamerican iamerican-huge iamerican-insane \
    iamerican-large iamerican-small ibrazilian ibulgarian icatalan \
    iczech idanish idutch iesperanto iestonian ifaroese ifrench \
    ifrench-gut igaelic igalician-minimos ihungarian iirish \
    ilithuanian imanx ingerman inorwegian iogerman ipolish \
    iportuguese irussian ispanish iswedish iswiss itagalog 

apt-get remove $APT_OPTS wamerican-huge wamerican-insane wamerican-large \
    wamerican-small wbrazilian wbritish wbritish-huge wbritish-insane \
    wbritish-large wbritish-small wbulgarian wcanadian wcanadian-huge \
    wcanadian-insane wcanadian-large wcanadian-small wcatalan wdanish \
    wdutch wesperanto wfaroese wfrench wgaelic wgalician-minimos \
    wgerman-medical wirish wmanx wngerman wnorwegian wogerman \
    wpolish wportuguese wspanish wswedish wswiss wukrainian 

apt-get remove $APT_OPTS itools anthy anthy-common hspell hspell-gui mozc-data mozc-server mozc-utils-gui 

apt-get remove $APT_OPTS manpages-de manpages-es manpages-fr manpages-hu \
    manpages-ja manpages-mk manpages-nl manpages-pl manpages-ro \
    manpages-tr manpages-zh task-dutch task-german task-japanese \
    task-macedonian task-polish task-romanian task-spanish task-turkish \
    manpages-ja-dev manpages-pl-dev manpages-pt-br task-brazilian-portuguese 
 
apt-get remove $APT_OPTS task-albanian-desktop task-amharic-desktop \
    task-arabic-desktop task-asturian-desktop task-basque-desktop \
    task-belarusian-desktop task-bengali-desktop task-bosnian-desktop \
    task-brazilian-portuguese-desktop \
    task-bulgarian-desktop task-catalan-desktop task-chinese-s-desktop \
    task-chinese-t-desktop task-croatian-desktop task-cyrillic-desktop \
    task-czech-desktop task-danish-desktop task-dutch-desktop \
    task-dzongkha-desktop task-esperanto-desktop task-estonian-desktop \
    task-finnish-desktop task-french-desktop task-galician-desktop \
    task-georgian-desktop task-german-desktop task-greek-desktop \
    task-gujarati-desktop task-hebrew-desktop task-hindi-desktop \
    task-hungarian-desktop task-icelandic-desktop \
    task-indonesian-desktop task-irish-desktop task-japanese-desktop \
    task-kannada-desktop task-kazakh-desktop task-khmer-desktop \
    task-korean-desktop task-kurdish-desktop task-latvian-desktop \
    task-lithuanian-desktop task-macedonian-desktop \
    task-malayalam-desktop task-marathi-desktop task-nepali-desktop \
    task-northern-sami-desktop task-norwegian-desktop \
    task-persian-desktop task-polish-desktop task-portuguese-desktop \
    task-punjabi-desktop task-romanian-desktop task-russian-desktop \
    task-serbian-desktop task-sinhala-desktop task-slovak-desktop \
    task-slovenian-desktop task-south-african-english-desktop \
    task-spanish-desktop task-swedish-desktop task-tamil-desktop \
    task-telugu-desktop task-thai-desktop task-turkish-desktop \
    task-ukrainian-desktop task-uyghur-desktop task-vietnamese-desktop \
    task-welsh-desktop task-xhosa-desktop

apt-get remove $APT_OPTS task-amharic  task-arabic task-asturian task-basque \
    task-belarusian task-bengali task-bosnian task-bulgarian task-catalan \
    task-chinese-s task-chinese-t task-croatian task-cyrillic task-czech \
    task-danish task-esperanto task-estonian task-finnish task-french \
    task-galician task-greek task-gujarati task-hebrew task-hindi \
    task-hungarian task-icelandic task-irish task-kazakh task-khmer \
    task-korean task-kurdish task-latvian task-lithuanian task-malayalam \
    task-marathi task-northern-sami task-norwegian task-persian \
    task-portuguese task-punjabi task-russian task-serbian task-slovak \
    task-slovenian task-swedish task-tagalog task-tamil task-telugu \
    task-thai task-ukrainian task-welsh 

apt-get autoremove $APT_OPTS
