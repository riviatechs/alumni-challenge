# The Alumni Challenge

The alumin challenge brings together former high schoolmates to participate in sports events to raise funds for various charities, to support needy students.

## Deployment

### Staging

[https://alumni-challenge-57xfyondja-uc.a.run.app](https://alumni-challenge-57xfyondja-uc.a.run.app)

### Production

- [Setting-up-a-global-https-load-balancer](2)

- External IP addresses

name: alumni-ip  
address: 34.120.114.201

- Create a serverless NEG

name: alumni-neg  
cloud-run-service: alumni-challenge

- Create a backend service

name: alumni-bsn

- Create a URL map

name: alumni-url-map

- To create a Google-managed SSL certificate resource

name: alumni-ssl  
domain: thealumnichallenge.org  

- Create a target HTTP(S) proxy to route requests to your URL map

name: alumni-target-https-proxy

- Create a global forwarding rule to route incoming requests to the proxy

name: alumni-forwarding-rule

- Update your load balancer with SSL certificate  
  [Redirect-HTTP-to-HTTPS](1)

[1]: https://cloud.google.com/load-balancing/docs/https/setting-up-http-https-redirect#console "Redirect HTTP to HTTPS"
[2]: https://cloud.google.com/load-balancing/docs/https/setting-up-https-serverless#gcloud_1 "Setting up a global external HTTP(S) load balancer (classic) with Cloud Run"