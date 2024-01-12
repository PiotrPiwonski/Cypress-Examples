/// <reference types="cypress" />

describe('E2E - executing the query directly to the API', () => {
    let apiData;
    beforeEach(() => {
        cy.fixture('example').then(data => {
            apiData = data;
        });
    })

    it('Authorization and add article', () => {
        const authData = {
            "user": {
                "email": "piwonskipiotrp@gmail.com",
                "password": "Piotrek@"
            }
        };
        const article = {
            "article": {
                "tagList": [],
                "title": "test tytuł xxxxxyyy",
                "description": "test",
                "body": "test"
            }
        }

        cy.request('POST', 'https://api.realworld.io/api/users/login', authData)
            .its('body').then(res => {
            const authToken = res.user.token;
            console.log(authToken);

            cy.request({
               method: 'POST',
               url: 'https://api.realworld.io/api/articles/',
               body: article,
               headers: {
                  "Authorization": "Token " + authToken
               }
            }).then(res => {
                expect(res.status).to.equal(201);
            });
        });

    });


});
