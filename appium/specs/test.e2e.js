
const should = require('should');
const { step } = require('mocha-steps');

describe(' Appium Tests', () => {
  

  step(' Mobile QA Home', async () => {
   
    const titleElement = await driver.$('~Mobile QA Home'); 

    // Assertion
    await titleElement.getText().should.eventually.equal('Mobile QA Home');
  });

  step('formulaire', async () => {
    
    const buttonElement = await driver.$('~Formulaire'); 
    await buttonElement.click();

    
    const resultElement = await driver.$('~Valider'); 
    // assertion
    await resultElement.getText().should.eventually.equal(' Valider');
  });

  
});