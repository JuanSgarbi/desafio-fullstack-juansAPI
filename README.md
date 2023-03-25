# desafio-fullstack-juansAPI

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Teste%20Full%20Stack%20Juan%20Sgarbi&uri=https%3A%2F%2Fraw.githubusercontent.com%2FJuanSgarbi%2Fdocumentation-api-teste-full-stack%2Fmain%2FInsomnia_2023-03-25.json)


*baseurl* = http://localhost:3001


# Para instalar a api

> No primeiro uso utilize

```
yarn
# após instalar as dependências utilize
yarn dev
```
> Obs: Lembre-se de setar as variáveis de ambiente de acordo com o arquivo .env.exemple

> Após o primeiro uso utilize 

```
yarn dev
```

>  Para parar a aplicação utilize

```
CTRL + C
```

# Rotas que não precisam de autenticação

## Rota para criar um usuário
> POST *baseurl*/users

- Apenas o campo is_client é um campo opicional, todos os demais devem ser enviados.
- O email deve ser válido e único.

> *Exemplo de envio*
```json
{
	"full_name": "Exemple Name",
	"email":"exemple@mail.com",
	"password":"123456",
	"phone_number":"12998547521"
}
```
> *Exemplo de retorno*
```json
{
	"id": "6046babf-9027-408d-8db7-39f283eeecf7",
	"full_name": "Exemple Name",
	"email": "Exemple@mail.com",
	"phone_number": "12998547521",
	"is_client": true,
	"createdAt": "2023-03-25T15:30:07.889Z",
	"contacts": []
}
```

## Rota para realizar o login
> POST *baseurl*/login

- Deve ser enviado um e-mail válido;
- Deve ser enviado uma senha válida;

> *Exemplo de envio* 

 ```json
{
	"email": "exemplo@mail.com",
	"password":"123456"
}
```

> *Exemplo de retorno*

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19jbGllbnQiOnRydWUsImlhdCI6MTY3OTc1NDc0NCwiZXhwIjoxNjc5ODQxMTQ0LCJzdWIiOiI5NTg1ZDBjYS1jOGVkLTRkMmUtOWMwMy04Mzg2ZTliMDRmM2MifQ.COfxyVixczEDzVVI2-C26u4A85uFIbdi1Vk5nqjCX4g"
}
```

## Rota para buscar um usuário pelo id
> GET *baseurl*/users/{id}

- Deve enviar um id válido na url 

> *Exemplo de retorno*
```json 
{
		"full_name": "Exemple Name",
		"email": "exemple3@teste.com",
		"phone_number": "12998547521",
		"is_client": true,
		"id": "8fa388bd-c05b-40e1-8e09-1512c9f0a519",
		"createdAt": "2023-03-22T23:16:50.846Z",
		"contacts": [
			{
				"id": "3721ab42-fb65-421b-ad87-533d1b033dcc",
				"email": "exemple1@teste.com",
				"full_name": "Exemple Name",
				"phone_number": "12998547521"
			},
			{
				"id": "a83eacc4-6546-4b2a-b4ce-ca861ddbf46c",
				"email": "exemple2@teste.com",
				"full_name": "Exemple Name",
				"phone_number": "12998547521"
			},
			{
				"id": "ed30ee27-66b8-48e4-845d-55986f11a686",
				"email": "exemple3@teste.com",
				"full_name": "Exemple Name",
				"phone_number": "12998547521"
			},
			{
				"id": "a7a10ac5-b555-4085-8fc9-452b4d6d3008",
				"email": "exemple4@teste.com",
				"full_name": "Exemple Name",
				"phone_number": "12998547521"
			}
		]
	}
```

# Rotas que precisam de autenticação

## Rota para buscar usuário pelo token de autenticação
> GET *baseurl*/users

- Deve ser enviado um token de autenticação

> *Exemplo de retorno*

```json 
{
	"full_name": "Exemple Name",
	"email": "exemple3@teste.com",
	"phone_number": "12998547521",
	"is_client": true,
	"id": "8fa388bd-c05b-40e1-8e09-1512c9f0a519",
	"createdAt": "2023-03-22T23:16:50.846Z",
	"contacts": [
		{
			"id": "3721ab42-fb65-421b-ad87-533d1b033dcc",
			"email": "exemple1@teste.com",
			"full_name": "Exemple Name",
			"phone_number": "12998547521"
		},
		{
			"id": "a83eacc4-6546-4b2a-b4ce-ca861ddbf46c",
			"email": "exemple2@teste.com",
			"full_name": "Exemple Name",
			"phone_number": "12998547521"
		}
	]
}
```

## Rota para adicionar um contato a um cliente
> PATCH *baseurl*/contact

- Deve estar autenticado.
- Deve enviar um id de cliente válido.

> *Exemplo de envio*

```json
{
	"id":"6046babf-9027-408d-8db7-39f283eeecf7"
}
```

> *Exemplo de retorno*

```json 
{
	"full_name": "Exemple Name",
	"email": "exemple@mail.com",
	"phone_number": "12997478564",
	"is_client": true,
	"id": "9585d0ca-c8ed-4d2e-9c03-8386e9b04f3c",
	"createdAt": "2023-03-25T13:56:27.167Z",
	"contacts": [
		{
			"id": "19be5105-9b25-4902-a1e0-8b6e77f9e1f5",
			"email": "exemple2@mail.com",
			"full_name": "Exemple Name",
			"phone_number": "12998547521"
		},
		{
			"id": "6046babf-9027-408d-8db7-39f283eeecf7",
			"email": "exemple3@mail.com",
			"full_name": "Exemple Name",
			"phone_number": "12998547521"
		}
	]
}
```

## Rota para atualizar informações do usuário
PATCH *baseurl*/users/{id}

- Deve enviar um id válido na url.
- Pode alterar as informações de um contato, desde que o usuário logado seja dono do contato.
- Os campos id, password, is_client e createdAt não podem ser alterados.

> *Exemplo de envio*

```json
{
	"full_name": "Exemple Name Patched"
}
```

> *Exemplo de retorno*

```json
{
    "full_name": "Exemple Name Patched",
    "email": "exemple@mail.com",
    "phone_number": "12997478564",
    "is_client": true,
    "id": "9585d0ca-c8ed-4d2e-9c03-8386e9b04f3c",
    "createdAt": "2023-03-25T13:56:27.167Z",
    "contacts": [
        {
            "id": "19be5105-9b25-4902-a1e0-8b6e77f9e1f5",
            "email": "exemple2@mail.com",
            "full_name": "Exemple Name",
            "phone_number": "12998547521"
        },
        {
            "id": "6046babf-9027-408d-8db7-39f283eeecf7",
            "email": "exemple3@mail.com",
            "full_name": "Exemple Name",
            "phone_number": "12998547521"
        }
    ]
}
```

## Rota para deletar um usuário
> DELETE *baseurl*/users/{id}

- Deve enviar o id do usuário na url.

> *Exemplo de retorno*

```
No body returned for response
```

## Rota para deletar um contato
> DELETE *baseurl*/contact/{id}

- Deve enviar o id do usuário na url.

> *Exemplo de retorno*

```
No body returned for response
```
