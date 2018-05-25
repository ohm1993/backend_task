# backend_task
This task is to build a simple stateless microservice in Nodejs, with three major functionalities -
- Authentication
- JSON patching
- Image Thumbnail Generation

### Required Endpoints

This project contains  the following endpoint functionality -

#### Public Endpoints
- Login
Request body should contain an arbitrary username/password pair
Treat it as a mock authentication service and accept any username/password.
Return a signed Json Web Token(JWT, https://jwt.io/) which can be used to validate future requests.


#### Protected Endpoints
The following two endpoints should be protected. The JWT obtained in the “Login” endpoint must be attached to each request.  If the JWT is missing or invalid, these endpoints should reject the request.

- Apply Json Patch
Request body should contain a JSON object and a JSON patch object (http://jsonpatch.com/).
Apply the json patch to the json object, and return the resulting json object.

- Create Thumbnail
Request should contain a public image URL.
Download the image, resize to 50x50 pixels, and return the resulting thumbnail.

#### how to run
1.do git clone https://github.com/ohm1993/backend_task.git
2.go to backend_task folder
3.run the comand npm start
go to the browser and type localhost:3000  

# screenshot
#Dummy login page to generate a token
![alt text](https://lh3.googleusercontent.com/-ydnu8y4awiPfT0UtPfblsgnZdd1ZBMqGTs8MjnfpyFE-sS3_uTd9G0MWdSQCmdPrAj8P1anp8pCuLzZnjhGw6hVvJwknn5QitZ6TyHnAPUI6TijlHREXCJJz5mODY7YLgA537BC7A-rk9WROvFRvehQfhUEKSYYn_8vurPRTU57nxTj_yxDOtcn5XNaZ8KtXx112ljgQWUm7LKZdFmhfgDm2Q8YlYr9hx5aGBKcaQJJX_3wlu-OXKSC7BIPsXsByRGeePn6wu5Gp8dy-bDZ17gkkBOURBROVap-eyOMTP3NXYLws2dWvqzehNxqiPv_bRuI5L2Ok-jModUViwguWPK3fqSTX_lQyJm57pYIXnUS2KGZP-IoCt-ZojmtUDMLSu5o-g_jVecBps-mkC8WDgrsWEBTia1CDKxe7fUKZAUcGc_aVRePMHaiB7KiQKlhGsmB3UXCqYIIitrImN3n9CtBToGQgEdmIxGI_tGjy6co5_QTaL3iw9IzDABOOJO4i0wcrnsX9TOmaW6G5MfS-pomV0Obee5bU3hnj7Q6WLkUnFMGxBCmjJSwiGPRk1TzN6lRsAS1pj86NyEqiLw136XiOAuPVGmstXE7ZvM=w1162-h653-no)
#Json Patch
![alt text](https://lh3.googleusercontent.com/LPbWkqsSfq8L3E9vtw7BRi4dDE9M5Cztmxasoi6RHUvUtXVaDu0_lEFwz4ZFsi_3JkfXI7AIMbH1SJ_WFjbYIiYoAJMHsCOEgOykbZUAo0vaZIeya8blxtwUgNCQFmTtgEmoXy2Qc1vUBqq6Yj36_GE6dcUj3rkDQHckIKKxdUSZx1gDJ0XZsQ2LQaeo_vh3tJKuECxrLwXIwZeAkx9c3wFmRoRUBoY9FZMGQcgOTyx1WpsMWvu1mB591JzWWV7jN7XdXILQ-VqVi-stXRAuiCGQTN6t_1EZVDuAo-YYMdY0pfw2bvaZ749_grs6GkL3jpV3tv21XRIHljEVfN6ppKo0dwH1bbBLX50BTHfxyXB7dZCtBkgdm8R8Mwdpd_dZ27WKqPwO7YvACxVKPHSz_3dCWB9AwNK0bPmlwcfv1xXfM4PrEjZZ6xy1ppibK9lLlp9hbZFobYudvo3PhHA_O9OCnpiqanDuLRsTjvUiclYSMbrc4uhlU8l2lOR_6dIYj_CALtJqwkOrWWBEcPotc2Dw-IqqhJjhcPKXh86B57kbhi8u9s475hIN9nfOme-BimRZyu032sY23K75vXZ17C1f5muuo6XBmcmA1Kg=w1162-h653-no)
#Image Resize Page
![alt text](https://lh3.googleusercontent.com/oPc2rwijqMiVc9X-oXxAlC4E119pLRpACo1Ha6IqPk65pYk2L4ESb9kECvRmlOFr6KmnNjMre1jHMFNmny9I-JI1Dpg_kRAUAjEGnTDHE7Y_XahAnZOzkqujKDd1TLBpYh1b2SfSGNxVTZ9yFwFCNcxhd3MqeaTZb3zpQff2OdVOTZYRMFORa00h7rbCzDyh57Kgf4HxoS4Jcx5gTYRVkavusJRu4v5708gjYdba_3nDk5c-ucDzFbrAVZ2_bRNh013OHLR0I45wos6cjVN3CbXzQ18Hj8moG9uw9cGeYFnISq76bx9pp8953sAoBSMr2MY_Pgvov7fjIOH56YAG9MGzKs4QfP9tMhTUsMs7Fe7Xfm4XmRc7oTjtP8SlF2NF6LI-mdlWsii41pwnS6jhzAt2iDLqFGHpVfn9PMk2oVZ-0VBwwnhrLPDSLSIrEhFV2cgULlZuUIvxlfTynBEz5a3ZzZ0c23MIhRPCThCXwZKDahLjemkus0EnIAhrjcqrOxzMSYIhnXi0SFKrLKDdzn8GO-gMcrG12E2LS6XS9dlMunCtHhxcVKlMD3Ks9dI6oMi_4CiKlEpshG7YRRHjfktpPgdKRnT7nN-N8I4=w1162-h653-no)
