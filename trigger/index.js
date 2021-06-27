module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log.warn('Notificao de warn')
    context.log.error('Notificao do tipo erro')
}
