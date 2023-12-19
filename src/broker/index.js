const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'kafka-demo',
  brokers: [
//    'localhost:9092'
    'bg-kafka.bg-kafka.svc.cluster.local:9092'
  ]
});

module.exports = kafka;