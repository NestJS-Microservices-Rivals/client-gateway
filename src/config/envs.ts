import * as joi from 'joi';
import 'dotenv/config';

interface EnvVars {
    PORT: number;
    PRODUCT_MICROSERVICE_HOST: string;
    PRODUCT_MICROSERVICE_PORT: number;

    ORDERS_MICROSERVICE_HOST: string;
    ORDERS_MICROSERVICE_PORT: number;
}

const envsSchema = joi
    .object({
        PORT: joi.number().required(),
        PRODUCT_MICROSERVICE_HOST: joi.string().required(),
        PRODUCT_MICROSERVICE_PORT: joi.number().required(),
        ORDERS_MICROSERVICE_HOST: joi.string().required(),
        ORDERS_MICROSERVICE_PORT: joi.number().required(),
})
    .unknown(true);

const { error, value } = envsSchema.validate( process.env );

if ( error ) {
    throw new Error(`Config validation error: ${ error.message }`);
}

const envVars:EnvVars = value;

export const envs = {
    port: envVars.PORT,
    productMicroserviceHost: envVars.PRODUCT_MICROSERVICE_HOST,
    productMicroservicePort: envVars.PRODUCT_MICROSERVICE_PORT,
    ordersMicroserviceHost: envVars.ORDERS_MICROSERVICE_HOST,
    ordersMicroservicePort: envVars.ORDERS_MICROSERVICE_PORT
}