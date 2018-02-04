import config from '../config';

export const validEnvelope = `
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:web="https://15below.com/FifteenBelow/Pasngr/WebServices/">
     <soapenv:Header>  
        <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
        <wsse:UsernameToken wsu:Id="UsernameToken-Xst0GZvObplfl0OW30W35g22" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
        <wsse:Username>${config.email.username}</wsse:Username>
        <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">${config.email.password}</wsse:Password>
      </wsse:UsernameToken>
     </wsse:Security>
       </soapenv:Header>
       <soapenv:Body>
          <tem:SubmitXML>
             <!--Optional:-->
             <tem:sendRequest>
                <!--Optional:-->
                <web:FlightPaxDet>
                   <web:FLIGHTXML _MessageType="BoardingPass">
                      <web:notification>
                         <web:Classification>BoardingPass</web:Classification>
                         <web:PNR>pnr</web:PNR>
                         <web:Email>test@email.com</web:Email>
                         <web:Passengers>
                            <web:Pax>
                               <web:title>title</web:title>
                               <web:firstName>givenName</web:firstName>
                               <web:surname>surname</web:surname>
                            </web:Pax>
                         </web:Passengers>
                         <web:DeepLink>${config.email.url}token</web:DeepLink>
                         <web:Destination>airportName</web:Destination>
                      </web:notification>
                   </web:FLIGHTXML>
                </web:FlightPaxDet>
             </tem:sendRequest>
          </tem:SubmitXML>
       </soapenv:Body>
    </soapenv:Envelope>
  `;

