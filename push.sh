#!/bin/bash

# Script automático para fazer push do projeto AgroTech
# Criado por AI Assistant

echo "🚀 Iniciando push para GitHub..."
echo ""
echo "📦 Branch: m-cursor"
echo "📁 Repositório: https://github.com/Gust01-coder/FIAP.git"
echo "👤 Username: GabrielLinconln"
echo ""

# Verificar se há algo para commitar
if [[ `git status --porcelain` ]]; then
  echo "⚠️  Há alterações não commitadas. Commitando agora..."
  git add .
  git commit -m "chore: últimas alterações antes do push"
fi

echo ""
echo "🔐 ATENÇÃO: Quando pedir PASSWORD, use seu Personal Access Token do GitHub"
echo "           (Não é sua senha normal do GitHub!)"
echo ""
echo "📖 Se não tem token, crie em: https://github.com/settings/tokens"
echo "   ✓ Marque 'repo' (Full control of private repositories)"
echo ""
echo "Pressione ENTER para continuar..."
read

# Fazer push
git push -u origin m-cursor

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Push realizado com SUCESSO! 🎉"
    echo ""
    echo "🌐 Veja seu código em:"
    echo "   https://github.com/Gust01-coder/FIAP/tree/m-cursor"
    echo ""
else
    echo ""
    echo "❌ Erro ao fazer push!"
    echo ""
    echo "💡 Soluções:"
    echo "   1. Verifique se usou o TOKEN (não a senha)"
    echo "   2. Crie um token em: https://github.com/settings/tokens"
    echo "   3. Ou tente: git remote set-url origin git@github.com:Gust01-coder/FIAP.git"
    echo ""
fi

