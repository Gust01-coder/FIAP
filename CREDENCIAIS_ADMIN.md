# 🔐 Credenciais de Acesso ao Painel Admin - AgroTech

## Acesso ao Painel Administrativo

Para acessar o painel admin e testar as funcionalidades administrativas, utilize as seguintes credenciais:

---

### 📍 **URL de Acesso**
```
http://localhost:5173/login
```

---

### 👤 **Credenciais**

**Usuário:**
```
admin
```

**Senha:**
```
agrotech
```

---

## 🚀 Como Acessar

1. **Inicie o projeto:**
   ```bash
   npm run dev
   ```

2. **Acesse a página de login:**
   - Abra o navegador em: `http://localhost:5173/login`
   - Ou clique em um link que redirecione para a área admin

3. **Faça o login:**
   - Digite o usuário: `admin`
   - Digite a senha: `agrotech`
   - Clique em "Entrar"

4. **Painel Admin:**
   - Após o login, você será redirecionado para `/admin`
   - Lá você poderá visualizar as mensagens dos usuários vindas do formulário de contato

---

## 📊 Funcionalidades do Painel Admin

### **Mensagens dos Usuários** (`/admin`)
- Visualiza todos os contatos enviados pelo formulário
- Exibe: Nome, E-mail, Cidade/Estado, Assunto
- Clique em uma linha para ver detalhes completos em um painel lateral

### **Dados Armazenados:**
Os dados do formulário são armazenados no `sessionStorage` do navegador:
- Key: `USER_CONTACT_LIST`
- Formato: JSON Array

---

## ⚠️ **Observações Importantes**

1. **Ambiente de Demonstração:**
   - Este é um sistema de autenticação para fins educacionais
   - **NUNCA** use este método em produção
   - As credenciais estão hard-coded no frontend

2. **Hash da Senha:**
   - A senha é hasheada com SHA-256
   - Hash armazenado: `841f9efa83f2ed1840a2782dcdbac6f2b15c32f1c23ae39cf966568010c80549`

3. **SessionStorage:**
   - Os dados são temporários e serão perdidos ao fechar o navegador
   - Para produção, usar banco de dados real

---

## 🧪 Testando o Sistema

### **1. Enviar uma mensagem de teste:**
1. Acesse: `http://localhost:5173/contato`
2. Preencha o formulário de contato
3. Envie a mensagem

### **2. Visualizar no painel admin:**
1. Faça login em: `http://localhost:5173/login`
2. Acesse o painel admin
3. Veja a mensagem enviada na tabela
4. Clique na mensagem para ver detalhes

---

## 🔒 Segurança em Produção

Para um sistema real, você deveria:

- ✅ Usar autenticação baseada em servidor (JWT, OAuth)
- ✅ Armazenar senhas com bcrypt ou argon2
- ✅ Implementar rate limiting
- ✅ Usar HTTPS
- ✅ Implementar refresh tokens
- ✅ Validar no backend
- ✅ Usar banco de dados seguro
- ✅ Implementar 2FA (autenticação de dois fatores)

---

**AgroTech** - Sistema de Demonstração Acadêmica 🌱

