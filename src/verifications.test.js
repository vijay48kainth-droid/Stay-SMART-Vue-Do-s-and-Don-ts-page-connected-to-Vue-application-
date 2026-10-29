const {threatsVerification, nameVerification, othernameVerification, dateVerification, 
    incidentVerification, emailVerification, phoneVerification, adviceOrAssistanceVerification} = require ('./verifications.js')

// test that threats is empty
test('is threats empty', function(){
    const threats = threatsVerification([]) // This passes the array to the function and makes it the threats variable.
    result = threats
    expect(result).toBe(false)
})

// test that threats contains a value

test ('value in threats list', function() {
    const threats = threatsVerification(['Malware'])
    expect(threats).toBe(true)
})

// test that threats list contains multiple threats
test ('multiple values in threats list', function() {
    const threats = threatsVerification(['Malware','Phishing','R.A.T (Remote access trojan)'])
    expect(threats).toBe(true)
})

// test that the name is not empty

test ('name is empty', function() {
    const name = nameVerification('')
    result = name
    expect (result).toBe(false)
})

// test that the name begins with a capital letter

test ('name is capitalised', function() {
    const name = nameVerification('Anne')
    expect (name).toBe(true)
})

// test that the name does not begin with a capital letter
test ('name is not capitalised', function() {
    const name = nameVerification('anne')
    expect (name).toBe(false)
})

// test that the othername is empty
test ('othername is empty', function(){
    const othername = othernameVerification('')
    result = othername
    expect(result).toBe(true)
})

// test that the othername contains both capitals and lowercase letters
test ('othername accepts capitalised and none-capitalised', function(){
    const othername = othernameVerification('annonYmous')
    expect(othername).toBe(true)
})

// test that the othername contains multiple characters 
test ('othername accepts different characters', function(){
    const othername = othernameVerification('annon-Y-mous#+123')
    expect(othername).toBe(true)
})

// test that the incident date is empty
test ('incident date is empty', function(){
    const date = dateVerification('')
    result = date
    expect(result).toBe(true)
})

// test that the incident date is in the past
test ('incident date is in the past', function(){
    const date = dateVerification('2026-06-04')
    expect(date).toBe(true)
})

// test that the incident date is in the future
test ('incident date is in the future', function(){
    const date = dateVerification('2030-06-04')
    expect(date).toBe(false)
})

// test that the incident is empty

test ('incident description is empty', function(){
    const incident = incidentVerification('')
    result = incident
    expect(result).toBe(true)
})

// test if the incident is under the character limit

test('incident description is under character limit', function() {
    const incident = incidentVerification("A".repeat(999)) // The incident limit is 1000 characters
    expect(incident).toBe(true)

})

// test if the incident is the character limit

test('incident description is character limit', function() {
    const incident = incidentVerification("A".repeat(1000))
    expect(incident).toBe(true)

})

// test if the incident is over the character limit

test('incident description over character limit', function() {
    const incident = incidentVerification("A".repeat(1001))
    expect(incident).toBe(false)

})

// test that the email is empty
test ('empty email', function(){
    const email = emailVerification('')
    result = email
    expect(result).toBe(false)
})

// test that the email is invalid
test ('invalid email', function(){
    const email = emailVerification('anne.smithgmail')
    expect(email).toBe(false)
})

// test that the email is valid and ends with .com
test ('valid email ends with: .com', function(){
    const email = emailVerification('anne.smith@gmail.com')
    expect(email).toBe(true)
})

// test that the email is valid and ends with .co.uk
test ('valid email ends with: .co.uk', function(){
    const email = emailVerification('anne.smith@gmail.co.uk')
    expect(email).toBe(true)
})

// test that the email is valid and ends with .org
test ('valid email ends with: .org', function(){
    const email = emailVerification('anne.smith@gmail.org')
    expect(email).toBe(true)
})

// test that phone number is empty
test ('empty phone number', function(){
    const phone = phoneVerification('')
    result = phone
    expect(result).toBe(true)
})

// test that phone number is invalid
test ('invalid phone number', function(){
    const phone = phoneVerification('879343875738')
    expect(phone).toBe(false)
})

// test that phone number is valid and starts with 44
test ('valid phone number begins with 44', function(){
    const phone = phoneVerification('449343875738')
    expect(phone).toBe(true)
})

// test that phone number is valid and starts with 01
test ('valid phone number begins with 01', function(){
    const phone = phoneVerification('019343875738')
    expect(phone).toBe(true)
})

// test that phone number is valid and starts with 02
test ('valid phone number begins with 02', function(){
    const phone = phoneVerification('029343875738')
    expect(phone).toBe(true)
})

// test that the advice or assistance has not been checked
test ('invalid advice or assistance', function(){
   const adviceOrAssistance = adviceOrAssistanceVerification('')
   result = adviceOrAssistance
   expect(result).toBe(false)
})

// test that either advice or assistance have been checked

test ('valid advice or assistance, checked Advice', function(){
   const adviceOrAssistance = adviceOrAssistanceVerification('Advice')
   expect(adviceOrAssistance).toBe(true)
})

test ('valid advice or assistance, checked Assistance', function(){
   const adviceOrAssistance = adviceOrAssistanceVerification('Assistance')
   expect(adviceOrAssistance).toBe(true)
})