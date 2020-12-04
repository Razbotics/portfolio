## Nginx file to deploy in /etc/nginx/sites-enabled

server {
    server_name razbotics.com;
    location /{
        proxy_pass http://127.0.0.1:3000/;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/razbotics.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/razbotics.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    if ($host = razbotics.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name razbotics.com;
    return 404; # managed by Certbot


}