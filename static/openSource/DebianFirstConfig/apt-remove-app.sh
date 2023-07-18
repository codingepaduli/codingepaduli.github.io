#!/bin/bash

## Remove unused Firefox localizations
apt-get remove -y --purge firefox-esr-l10n-ar firefox-esr-l10n-ast \
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
apt-get remove -y --purge libreoffice-base-core libreoffice-calc \
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

apt-get autoremove -y --purge

