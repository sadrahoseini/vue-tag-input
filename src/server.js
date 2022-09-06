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
			server.create("tag", { id: 'apple', label: 'apple' })
			server.create("tag", { id: 'gillette', label: 'gillette' })
			server.create("tag", { id: 'mastercard', label: 'mastercard' })
			server.create("tag", { id: 'the-walt-disney-company', label: 'The Walt Disney Company' })
			server.create("tag", { id: 'facebook', label: 'facebook' })
			server.create("tag", { id: 'louis-vuitton', label: 'Louis Vuitton' })
			server.create("tag", { id: 'sadrix', label: 'sadrix' })
			server.create("tag", { id: 'alibaba', label: 'alibaba' })
		},
	})

  return server;
}