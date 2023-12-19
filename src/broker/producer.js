const kafka = require(".");

const producer = kafka.producer();

module.exports.producerStart = async (topicSelected) => {
  await producer.connect();
  for (let i =0; i <= 100; i++){
    console.log("Enviando mensaje")
    await producer.send({
      topic: topicSelected,
      messages: [
        { value: 'Hello KafkaJs ' + i }
      ]
    });
  }
  await producer.disconnect();
}