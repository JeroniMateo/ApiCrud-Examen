.env

APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:qrreMsBFdv9epiTw2tCj+1BSLGvCl0rzLabAsilYEb4=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=pgsql 
DB_HOST=51.178.152.213 
DB_PORT=5432 
DB_DATABASE=jmateo_apicrud_examen
DB_USERNAME=jmateo_usr 
DB_PASSWORD=abc123.

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DRIVER=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"



## POSTMAN COLLECTION

{
	"info": {
		"_postman_id": "8a962d7b-856d-4252-bcf3-2ef24c36710f",
		"name": "collection.json",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Get",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://jmateo_exa.randion.es/api/apicontactos",
					"protocol": "http",
					"host": [
						"jmateo_exa",
						"randion",
						"es"
					],
					"path": [
						"api",
						"apicontactos"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get One",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://jmateo_exa.randion.es/api/apicontactos/1",
					"protocol": "http",
					"host": [
						"jmateo_exa",
						"randion",
						"es"
					],
					"path": [
						"api",
						"apicontactos",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "Post",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": " {\r\n        \"nombre\": \"Jeroni\",\r\n        \"tel\": \"987654321\",\r\n        \"num_libros\": 9\r\n    }"
				},
				"url": {
					"raw": "http://jmateo_exa.randion.es/api/apicontactos",
					"protocol": "http",
					"host": [
						"jmateo_exa",
						"randion",
						"es"
					],
					"path": [
						"api",
						"apicontactos"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://jmateo_exa.randion.es/api/apicontactos/1",
					"protocol": "http",
					"host": [
						"jmateo_exa",
						"randion",
						"es"
					],
					"path": [
						"api",
						"apicontactos",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "Put",
			"request": {
				"method": "PUT",
				"header": [],
				"url": {
					"raw": "http://jmateo_exa.randion.es/api/apicontactos/1",
					"protocol": "http",
					"host": [
						"jmateo_exa",
						"randion",
						"es"
					],
					"path": [
						"api",
						"apicontactos",
						"1"
					]
				}
			},
			"response": []
		}
	]
}