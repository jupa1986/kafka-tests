const { consumerStart } = require("./broker/consumer");
const { producerStart } = require("./broker/producer");
const bootstrap = async () => {
  const topic = 'lealtad.campanas.acciones'
  await producerStart(topic);
  await consumerStart(topic);
}
bootstrap();