import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080/auth",
 realm: "redhat-external",
 clientId: "react-kc",
});

export default keycloak;