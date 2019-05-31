var response = require("http/v4/response");
var configurations = require("core/v4/configurations");
var A_SalesOrder = require("sap-s4-hana-cloud/SalesOrder/A_SalesOrder");

var salesOrderClient = A_SalesOrder.getClient({
	host: "https://sandbox.api.sap.com/s4hanacloud",
	headers: [{
		name: "apikey",
		value: configurations.get("API_KEY")
	}]
});

var data = salesOrderClient.list(A_SalesOrder.queryBuilder()
	.select(
		A_SalesOrder.SALES_ORDER,
		A_SalesOrder.TOTAL_NET_AMOUNT,
		A_SalesOrder.TRANSACTION_CURRENCY,
		A_SalesOrder.PURCHASE_ORDER_BY_CUSTOMER,
		A_SalesOrder.INCOTERMS_CLASSIFICATION,
		A_SalesOrder.INCOTERMS_TRANSFER_LOCATION
	)
	.filter(
		A_SalesOrder.TRANSACTION_CURRENCY.eq("EUR")
		.and(A_SalesOrder.INCOTERMS_TRANSFER_LOCATION.ne("Walldorf"))
	)
	.top(20)
	.format("json")
	.build()
);

response.setContentType("application/json");
response.println(JSON.stringify(data));