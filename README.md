# Reforma Tributária Setorial — 50 Segmentos

Site estático com análise dos impactos do **IBS**, da **CBS** e do **Imposto Seletivo (IS)** em 50+ segmentos da economia brasileira, com base na **LC 214/2025** e **LC 227/2026**.

Conteúdo inspirado no e-book *Reforma Tributária Setorial* (Bruno Viana Macedo / Academia Elite Fiscal).

## 🚀 Acesse o site

Após publicar no GitHub Pages:

```
https://silvioalbqrq.github.io/50-Segmentos/
```

## 📂 Estrutura

```
50-Segmentos/
├── index.html          # Página principal com lista de setores
├── css/style.css       # Estilos (tema escuro) + regras de seleção
├── js/
│   ├── protect.js      # Proteção contra cópia de código (DevTools, view-source etc.)
│   ├── setores.js      # Dados dos 50+ setores
│   └── app.js          # Filtros e busca
├── setores/            # Páginas individuais de cada setor
│   ├── setor-01.html
│   ├── setor-02.html
│   └── ...
└── README.md
```

## 🔒 Proteção de código

O arquivo `js/protect.js` dificulta:

- Clique direito (menu de contexto)
- Atalhos F12 / Ctrl+Shift+I / Ctrl+U / Ctrl+S
- Arrastar imagens e links
- Análise via console (limpeza periódica)

**O conteúdo textual visível continua selecionável e copiável** (parágrafos, tabelas, títulos dos setores).  
A proteção é de dissuasão — não é à prova de usuários avançados.

## 🛠️ Como publicar no GitHub Pages

1. Crie o repositório `50-Segmentos` (ou use o existente `silvioalbqrq/50-Segmentos`).
2. Faça upload / push dos arquivos.
3. Vá em **Settings → Pages**.
4. **Source**: branch `main` (ou `master`) + pasta `/ (root)`.
5. Salve. Em alguns minutos o site estará no ar.

### Via terminal

```bash
git clone https://github.com/silvioalbqrq/50-Segmentos.git
cd 50-Segmentos
# copie os arquivos atualizados
git add .
git commit -m "Proteção de código + conteúdo copiável"
git push origin main
```

## 📋 Setores incluídos

Frigoríficos e Açougues, Autopeças, Farmácias e Drogarias, Bens Móveis Usados, Supermercados, E-commerce, Pet Shops, Restaurantes, Hotelaria, Saúde, Odontologia, Salões de Beleza, Educação, Infoprodutores, Advocacia, Contabilidade, Postos de Combustível, Imobiliário, Veículos Novos, Produtor Rural, Laboratórios, Hospitais, Construtoras, Marketing Digital, Têxtil, Turismo, Pescado, Bebidas, Internet, Software, Sucata, Manipulação, Veterinária, Logística, Energia, Estética, Pneus, Locação, Distribuidoras de Medicamentos, Laticínios, Panificação, Sucos, Rações Pet, Massas, Distribuidoras de Alimentos, Indústria de Bebidas, Carne e Frango, Hortifruti, Cemitério/Funerária, Padaria Varejista + 3 extras (Comércio, Serviços e Indústria em geral).

## ⚠️ Aviso

Material de caráter **educativo**. Não substitui a leitura da legislação oficial nem a consultoria de profissional habilitado. As alíquotas e regras podem sofrer ajustes por atos normativos posteriores.

## Licença

Uso educacional. Respeite os direitos autorais do e-book original.
