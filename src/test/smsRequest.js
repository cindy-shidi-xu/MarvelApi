import config from '../config';

export const smsSingleCustomerRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"><soap:Header xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><wsse:Security soap:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"><wsse:UsernameToken wsu:Id="unt_b6DvB023Co16Axjo" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"><wsse:Username>${config.sms.username}</wsse:Username><wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">${config.sms.password}</wsse:Password></wsse:UsernameToken></wsse:Security></soap:Header><soapenv:Body><SendSMS xmlns="http://www.qantas.com.au/messaging/sms/ebm/1.2"><SMSRequestCollection><SMSRequest><RequestIdentifier><Id>Qantas</Id></RequestIdentifier><SMS><Sender xmlns="http://www.qantas.com.au/messaging/sms/ebo/1.2"><Name>Qantas</Name></Sender><Recipients xmlns="http://www.qantas.com.au/messaging/sms/ebo/1.2"><recipient><CountryCode>+61</CountryCode><Number>123456789</Number></recipient></Recipients><Contents xmlns="http://www.qantas.com.au/messaging/sms/ebo/1.2"><Type>Text</Type><TextMessage><TextContent>Hello, here's your Qantas boarding pass for your upcoming flight to MELBOURNE: ${config.sms.url}text</TextContent></TextMessage></Contents><Delivery xmlns="http://www.qantas.com.au/messaging/sms/ebo/1.2"><Provider><Keys><Name>Qantas</Name><Value>Qantas</Value></Keys></Provider><Mode>One_Way</Mode></Delivery></SMS></SMSRequest></SMSRequestCollection></SendSMS></soapenv:Body></soapenv:Envelope>`;


export const smsMultiCustomerRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"><soap:Header xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><wsse:Security soap:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"><wsse:UsernameToken wsu:Id="unt_b6DvB023Co16Axjo" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"><wsse:Username>${config.sms.username}</wsse:Username><wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">${config.sms.password}</wsse:Password></wsse:UsernameToken></wsse:Security></soap:Header><soapenv:Body><SendSMS xmlns="http://www.qantas.com.au/messaging/sms/ebm/1.2"><SMSRequestCollection><SMSRequest><RequestIdentifier><Id>Qantas</Id></RequestIdentifier><SMS><Sender xmlns="http://www.qantas.com.au/messaging/sms/ebo/1.2"><Name>Qantas</Name></Sender><Recipients xmlns="http://www.qantas.com.au/messaging/sms/ebo/1.2"><recipient><CountryCode>+61</CountryCode><Number>123456789</Number></recipient></Recipients><Contents xmlns="http://www.qantas.com.au/messaging/sms/ebo/1.2"><Type>Text</Type><TextMessage><TextContent>Hello, here's your Qantas boarding pass for your upcoming flight to MELBOURNE: ${config.sms.url}text</TextContent></TextMessage></Contents><Delivery xmlns="http://www.qantas.com.au/messaging/sms/ebo/1.2"><Provider><Keys><Name>Qantas</Name><Value>Qantas</Value></Keys></Provider><Mode>One_Way</Mode></Delivery></SMS></SMSRequest><SMSRequest><RequestIdentifier><Id>Qantas</Id></RequestIdentifier><SMS><Sender xmlns="http://www.qantas.com.au/messaging/sms/ebo/1.2"><Name>Qantas</Name></Sender><Recipients xmlns="http://www.qantas.com.au/messaging/sms/ebo/1.2"><recipient><CountryCode>+61</CountryCode><Number>987654321</Number></recipient></Recipients><Contents xmlns="http://www.qantas.com.au/messaging/sms/ebo/1.2"><Type>Text</Type><TextMessage><TextContent>Hello, here's your Qantas boarding pass for your upcoming flight to airportName: ${config.sms.url}text</TextContent></TextMessage></Contents><Delivery xmlns="http://www.qantas.com.au/messaging/sms/ebo/1.2"><Provider><Keys><Name>Qantas</Name><Value>Qantas</Value></Keys></Provider><Mode>One_Way</Mode></Delivery></SMS></SMSRequest></SMSRequestCollection></SendSMS></soapenv:Body></soapenv:Envelope>`;
