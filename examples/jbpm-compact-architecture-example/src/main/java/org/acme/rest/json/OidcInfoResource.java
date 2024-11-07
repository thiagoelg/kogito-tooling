package org.acme.rest.json;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import org.eclipse.microprofile.config.inject.ConfigProperty;

@Path("/oidc")
public class OidcInfoResource {

    @Inject
    OidcInfoResponse oidcInfoResponse;

    @GET
    @Path("/info")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getOidcInfoResponse() {
        return Response.ok(oidcInfoResponse).build();
    }   
}


