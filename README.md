# victorqueirogatoledo.github.io

Portfolio pessoal de Victor Queiroga Toledo - infraestrutura de TI: switches, Wi-Fi, cabeamento e servidores.
Site estatico (HTML + CSS + JS, sem dependencias de build), publicado por GitHub Pages.

**Layout: terminal.** Cada pagina e uma janela de terminal (barra de titulo, abas como caminhos) e cada secao e um par comando -> saida (`whoami`, `ls projetos/`, `history --carreira`, `cat metodo.txt`). Tudo em JetBrains Mono; azul da QSI para caminhos e links, verde para prompt e confirmacao, ambar para pendencia. Os componentes estao em `assets/styles.css`: `.term`, `.tabs`, `.cmd`, `.out`, `.entry` (saida tipo `ls -l`), `.hist` (historico), `.kv`, `.list`, `.chips`, `.note`.

## Paginas

| Arquivo | Conteudo |
| --- | --- |
| `index.html` | Home: apresentacao, numeros e caminhos |
| `sobre.html` | Trajetoria, metodo de trabalho e ferramentas |
| `projetos.html` | Cards dos projetos, cada um linkando a apresentacao no repo `apresentacoes` |
| `curriculo.html` | Experiencia, formacao, certificacoes e competencias |
| `contato.html` | Canais de contato |
| `assets/styles.css` | Design system (tokens de cor, tipografia, componentes) |
| `assets/site.js` | Menu mobile e ano do rodape |

## Publicacao

GitHub Pages: repositorio `VictorQueirogaToledo.github.io`, branch `main`, pasta raiz.
URL: https://victorqueirogatoledo.github.io

O arquivo `.nojekyll` impede o Jekyll de processar o conteudo (mantem pastas iniciadas por `_`).

## Pendencias de conteudo

Tudo o que falta preencher esta marcado no HTML com `class="todo"` (aparece em laranja no site):

- [x] URL do LinkedIn
- [ ] E-mail e WhatsApp em `contato.html`
- [x] Anos de experiencia no contador da home (3+, desde nov/2022 - vira 4 em nov/2026)
- [ ] Formacao e certificacoes em `sobre.html` e `curriculo.html`
- [x] Cargos anteriores em `curriculo.html`
- [ ] PDF do curriculo em `assets/curriculo.pdf`
- [ ] Foto (opcional) e favicon

Procure por `todo` para achar todos:

```bash
grep -rn 'class="todo"\|todo">' *.html
```

## Rodar local

Qualquer servidor estatico serve. Exemplo:

```bash
python -m http.server 8080
```
