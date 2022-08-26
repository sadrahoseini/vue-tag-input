import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
	let server = createServer({
		environment,

		models: {
			brand: Model,
		},

		routes() {
			this.namespace = "api"

			this.get("/movies")
		},

		seeds(server) {
			server.create("brand", { id: 'apple', label: 'Apple' })
			server.create("brand", { id: 'gillette', label: 'Gillette' })
			server.create("brand", { id: 'mastercard', label: 'Mastercard' })
			server.create("brand", { id: 'the-walt-disney-company', label: 'The Walt Disney Company' })
			server.create("brand", { id: 'facebook', label: 'Facebook' })
			server.create("brand", { id: 'louis-vuitton', label: 'Louis Vuitton' })
			server.create("brand", { id: 'sadrix', label: 'Sadrix' })
			server.create("brand", { id: 'alibaba', label: 'Alibaba' })
		},
	})

  return server;
}