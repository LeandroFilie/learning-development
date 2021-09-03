# Terminal
## Dicas e Truques
- Control +
  - Setas (pula palavras)
  - A (início da linha)
  - E (final da linha)
  - U (limpa a linha)
  - K (remove do cursor até o final da linha)
  - L (clear)
    - Limpa tudo, porém mantém a linha

## Comandos
### man
Explica o comando
```bash
man <comando>
```

### apropos
Comandos relacionados com a pesquisa
```bash
apropos <descrição do que quer fazer (em inglês)>
```

### pwd
Mostra o diretório atual, o caminho completo

### cd
Mudar diretório
```bash
cd  nome_pasta

# diretório atual
cd .

# volta diretórios
cd ..

#volta de onde veio
cd -
```

### ls
Lista arquivos e pastas
```bash
# mais informações
ls -l

# all (até os ocultos)
ls -a

# mostra o tamanho dos arquivos de forma simplificada
ls - h

# recursive
ls -R

# ordena pelo tamanho
ls -S
```

### file
Tipo do arquivo e informações

### stat
Dono do arquivo e modificações

### mkdir
Cria diretórios
```bash
mkdir -p  <diretorio-pai/diretorio-filho>
```

### touch
- Alterar registro de data e hora de arquivos ou pastas
- Altera para a hora atual
- Criar um ou mais arquivos

### cp
Copiar
```bash
cp arquivo-a-copiar local-destino

cp -r diretorio1 diretorio2 diretorio-destino
```

### mv
Mover/Renomear
Mesmo funcionamento do cp

### rm
Remover
```bash
# remove tudo do diretório
rm -r <pasta> 

# remove a força
rm -f <pasta>
```

## Wildcards (curinga)

### Asterisco (*)
Um caractere ou mais

### Ponto de Interrogação (?)
Um carácter

### find
```bash
find <local> -type <d ou f> -name “<o que tem que ter no nome do arquivo>”
```
- No local, usar . caso queira pesquisar no diretório atual
- Type d|f: directory or file

### less e cat
Ver conteúdo do arquivo

### nano e vim
Editar arquivos