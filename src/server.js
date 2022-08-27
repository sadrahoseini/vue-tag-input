import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
	let server = createServer({
		environment,

		models: {
			tag: Model,
		},

		routes() {
			this.namespace = "/api"

			this.get("/tags")
		},

		seeds(server) {
			server.create("tag", { id: 'apple', label: 'Apple' })
			server.create("tag", { id: 'gillette', label: 'Gillette' })
			server.create("tag", { id: 'mastercard', label: 'Mastercard' })
			server.create("tag", { id: 'the-walt-disney-company', label: 'The Walt Disney Company' })
			server.create("tag", { id: 'facebook', label: 'Facebook' })
			server.create("tag", { id: 'louis-vuitton', label: 'Louis Vuitton' })
			server.create("tag", { id: 'sadrix', label: 'Sadrix' })
			server.create("tag", { id: 'alibaba', label: 'Alibaba' })
		},
	})

  return server;
}