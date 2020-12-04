#!/bin/bash
echo 'Starting to Deploy...'
ssh ubuntu@3.138.222.105 "docker container rm portfolio -f
        docker pull razbotics/portfolio:latest
        docker run --name portfolio -d -p 3000:80 razbotics/portfolio:latest
        "
echo 'Deployment completed successfully'