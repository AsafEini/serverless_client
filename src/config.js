export default {
    s3: {
        REGION: "eu-west-2",
        BUCKET: "mcfrienly-app-bucket"
    },
    apiGateway: {
        REGION: "eu-west-2",
        URL: "https://s2xv7l8wsj.execute-api.eu-west-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "eu-west-2",
        USER_POOL_ID: "eu-west-2_b7fYEl8OB",
        APP_CLIENT_ID: "6r5coe2dtj1o3hd34a6j0lekr9",
        IDENTITY_POOL_ID: "eu-west-2:c47479b7-df33-426e-8b20-d96983e6a659"
    },
    MAX_ATTACHMENT_SIZE: 5000000
};