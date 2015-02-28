# interject.js
A JavaScript/NodeJS IRC bot that playfully interjects whenever 'Linux', and not 'GNU/Linux' or 'GNU+Linux' is mentioned.
# How to install
On Arch GNU/Linux

````
sudo pacman -S nodejs
cd
mkdir interject
cd interject
git clone https://github.com/b4x/interject.git
npm install irc underscore
````

On Debian GNU/Linux 

````
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup | bash -
sudo apt-get install -y nodejs
cd
mkdir interject
cd interject
git clone https://github.com/b4x/interject.git
npm install irc underscore
````

# How to run

````
nano interject.js
````

Replace #channel with the IRC channel and irc.server.domain with the IRC server.
Ctrl+O and then Enter to save the nano file.

````
node interject.js
````
