#!/usr/bin/bash
sudo pip install virtualenv
sudo apt-get install python3-usb1 vim
git clone git@github.com:timcowlishaw/excesos-extrasensoriales-matadero-2022.git
cd excesos-extrasensoriales/archivos-blandos
virtualenv venv
. venv/bin/activate
pip install -r requirements.txt 
sudo cp ./pi-config/50-xprinter.rules /etc/udev/rules.d/
sudo udevadm control --reload-rules && sudo udevadm trigger
