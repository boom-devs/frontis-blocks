"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'surecart/1.0 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Retrieves details of the current account's abandoned checkout protocol.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_abandoned_checkout_protocol = function () {
        return this.core.fetch('/v1/abandoned_checkout_protocol', 'get');
    };
    /**
     * Updates the current account's abandoned checkout protocol.
     *
     * @summary Update
     */
    SDK.prototype.update_abandoned_checkout_protocol = function (body) {
        return this.core.fetch('/v1/abandoned_checkout_protocol', 'patch', body);
    };
    /**
     * Returns a list of your abandonded checkouts.
     *
     * @summary List
     */
    SDK.prototype.list_abandonded_checkout = function (metadata) {
        return this.core.fetch('/v1/abandoned_checkouts', 'get', metadata);
    };
    /**
     * Retrieves details of a specific abandonded checkout.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_abandonded_checkout = function (metadata) {
        return this.core.fetch('/v1/abandoned_checkouts/{id}', 'get', metadata);
    };
    SDK.prototype.update_abandonded_checkout = function (body, metadata) {
        return this.core.fetch('/v1/abandoned_checkouts/{id}', 'patch', body, metadata);
    };
    /**
     * Retrieves details of the current account.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_account = function () {
        return this.core.fetch('/v1/account', 'get');
    };
    /**
     * Updates the current account.
     *
     * @summary Update
     */
    SDK.prototype.update_account = function (body) {
        return this.core.fetch('/v1/account', 'patch', body);
    };
    /**
     * Returns a list of your activations.
     *
     * @summary List
     */
    SDK.prototype.list_activation = function (metadata) {
        return this.core.fetch('/v1/activations', 'get', metadata);
    };
    /**
     * Creates a new activation.
     *
     * @summary Create
     */
    SDK.prototype.create_activation = function (body) {
        return this.core.fetch('/v1/activations', 'post', body);
    };
    /**
     * Retrieves details of a specific activation.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_activation = function (metadata) {
        return this.core.fetch('/v1/activations/{id}', 'get', metadata);
    };
    SDK.prototype.update_activation = function (body, metadata) {
        return this.core.fetch('/v1/activations/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific activation.
     *
     * @summary Delete
     */
    SDK.prototype.delete_activation = function (metadata) {
        return this.core.fetch('/v1/activations/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your affiliation products.
     *
     * @summary List
     */
    SDK.prototype.list_affiliation_product = function (metadata) {
        return this.core.fetch('/v1/affiliation_products', 'get', metadata);
    };
    /**
     * Creates a new affiliation product.
     *
     * @summary Create
     */
    SDK.prototype.create_affiliation_product = function (body) {
        return this.core.fetch('/v1/affiliation_products', 'post', body);
    };
    /**
     * Retrieves details of a specific a specific affiliation product.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_affiliation_product = function (metadata) {
        return this.core.fetch('/v1/affiliation_products/{id}', 'get', metadata);
    };
    SDK.prototype.update_affiliation_product = function (body, metadata) {
        return this.core.fetch('/v1/affiliation_products/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific affiliation product.
     *
     * @summary Delete
     */
    SDK.prototype.delete_affiliation_product = function (metadata) {
        return this.core.fetch('/v1/affiliation_products/{id}', 'delete', metadata);
    };
    /**
     * Retrieves details of the current account's affiliation protocol.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_affiliation_protocol = function () {
        return this.core.fetch('/v1/affiliation_protocol', 'get');
    };
    /**
     * Updates the current account's affiliation protocol.
     *
     * @summary Update
     */
    SDK.prototype.update_affiliation_protocol = function (body) {
        return this.core.fetch('/v1/affiliation_protocol', 'patch', body);
    };
    /**
     * Returns a list of your affiliation requests.
     *
     * @summary List
     */
    SDK.prototype.list_affiliation_request = function (metadata) {
        return this.core.fetch('/v1/affiliation_requests', 'get', metadata);
    };
    /**
     * Creates a new affiliation request.
     *
     * @summary Create
     */
    SDK.prototype.create_affiliation_request = function (body) {
        return this.core.fetch('/v1/affiliation_requests', 'post', body);
    };
    /**
     * Retrieves details of a specific affiliation request.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_affiliation_request = function (metadata) {
        return this.core.fetch('/v1/affiliation_requests/{id}', 'get', metadata);
    };
    SDK.prototype.update_affiliation_request = function (body, metadata) {
        return this.core.fetch('/v1/affiliation_requests/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific affiliation request.
     *
     * @summary Delete
     */
    SDK.prototype.delete_affiliation_request = function (metadata) {
        return this.core.fetch('/v1/affiliation_requests/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your affiliations.
     *
     * @summary List
     */
    SDK.prototype.list_affiliation = function (metadata) {
        return this.core.fetch('/v1/affiliations', 'get', metadata);
    };
    /**
     * Creates a new affiliation.
     *
     * @summary Create
     */
    SDK.prototype.create_affiliation = function (body) {
        return this.core.fetch('/v1/affiliations', 'post', body);
    };
    /**
     * Retrieves details of a specific affiliation.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_affiliation = function (metadata) {
        return this.core.fetch('/v1/affiliations/{id}', 'get', metadata);
    };
    SDK.prototype.update_affiliation = function (body, metadata) {
        return this.core.fetch('/v1/affiliations/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific affiliation.
     *
     * @summary Delete
     */
    SDK.prototype.delete_affiliation = function (metadata) {
        return this.core.fetch('/v1/affiliations/{id}', 'delete', metadata);
    };
    /**
     * Activates a specific affiliation.
     *
     * @summary Activate
     */
    SDK.prototype.activate_affiliation = function (metadata) {
        return this.core.fetch('/v1/affiliations/{id}/activate', 'patch', metadata);
    };
    /**
     * Deactivates a specific affiliation.
     *
     * @summary Deactivate
     */
    SDK.prototype.deactivate_affiliation = function (metadata) {
        return this.core.fetch('/v1/affiliations/{id}/deactivate', 'patch', metadata);
    };
    /**
     * Returns a list of your auto fees.
     *
     * @summary List
     */
    SDK.prototype.list_auto_fee = function (metadata) {
        return this.core.fetch('/v1/auto_fees', 'get', metadata);
    };
    /**
     * Creates a new auto fee.
     *
     * @summary Create
     */
    SDK.prototype.create_auto_fee = function (body) {
        return this.core.fetch('/v1/auto_fees', 'post', body);
    };
    /**
     * Retrieves details of a specific auto fee.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_auto_fee = function (metadata) {
        return this.core.fetch('/v1/auto_fees/{id}', 'get', metadata);
    };
    SDK.prototype.update_auto_fee = function (body, metadata) {
        return this.core.fetch('/v1/auto_fees/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific auto fee.
     *
     * @summary Delete
     */
    SDK.prototype.delete_auto_fee = function (metadata) {
        return this.core.fetch('/v1/auto_fees/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your balance transactions.
     *
     * @summary List
     */
    SDK.prototype.list_balance_transaction = function (metadata) {
        return this.core.fetch('/v1/balance_transactions', 'get', metadata);
    };
    /**
     * Creates a new balance transaction.
     *
     * @summary Create
     */
    SDK.prototype.create_balance_transaction = function (body) {
        return this.core.fetch('/v1/balance_transactions', 'post', body);
    };
    /**
     * Retrieves details of a specific balance transaction.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_balance_transaction = function (metadata) {
        return this.core.fetch('/v1/balance_transactions/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your balances.
     *
     * @summary List
     */
    SDK.prototype.list_balance = function (metadata) {
        return this.core.fetch('/v1/balances', 'get', metadata);
    };
    /**
     * Retrieves details of the current account's brand.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_brand = function () {
        return this.core.fetch('/v1/brand', 'get');
    };
    /**
     * Updates the current account's brand.
     *
     * @summary Update
     */
    SDK.prototype.update_brand = function (body) {
        return this.core.fetch('/v1/brand', 'patch', body);
    };
    /**
     * Returns a list of your bulk actions.
     *
     * @summary List
     */
    SDK.prototype.list_bulk_action = function (metadata) {
        return this.core.fetch('/v1/bulk_actions', 'get', metadata);
    };
    /**
     * Creates a new bulk action.
     *
     * @summary Create
     */
    SDK.prototype.create_bulk_action = function (body) {
        return this.core.fetch('/v1/bulk_actions', 'post', body);
    };
    /**
     * Retrieves details of a specific bulk action.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_bulk_action = function (metadata) {
        return this.core.fetch('/v1/bulk_actions/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your bumps.
     *
     * @summary List
     */
    SDK.prototype.list_bump = function (metadata) {
        return this.core.fetch('/v1/bumps', 'get', metadata);
    };
    /**
     * Creates a new bump.
     *
     * @summary Create
     */
    SDK.prototype.create_bump = function (body) {
        return this.core.fetch('/v1/bumps', 'post', body);
    };
    /**
     * Retrieves details of a specific bump.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_bump = function (metadata) {
        return this.core.fetch('/v1/bumps/{id}', 'get', metadata);
    };
    SDK.prototype.update_bump = function (body, metadata) {
        return this.core.fetch('/v1/bumps/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific bump.
     *
     * @summary Delete
     */
    SDK.prototype.delete_bump = function (metadata) {
        return this.core.fetch('/v1/bumps/{id}', 'delete', metadata);
    };
    /**
     * Duplicates a specific order bump.
     *
     * @summary Duplicate
     */
    SDK.prototype.duplicate_bump = function (metadata) {
        return this.core.fetch('/v1/bumps/{id}/duplicate', 'post', metadata);
    };
    /**
     * Returns a list of your cancellation acts.
     *
     * @summary List
     */
    SDK.prototype.list_cancellation_act = function (metadata) {
        return this.core.fetch('/v1/cancellation_acts', 'get', metadata);
    };
    /**
     * Retrieves details of a specific cancellation reason.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_cancellation_act = function (metadata) {
        return this.core.fetch('/v1/cancellation_acts/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your cancellation reasons.
     *
     * @summary List
     */
    SDK.prototype.list_cancellation_reason = function (metadata) {
        return this.core.fetch('/v1/cancellation_reasons', 'get', metadata);
    };
    /**
     * Creates a new cancellation reason.
     *
     * @summary Create
     */
    SDK.prototype.create_cancellation_reason = function (body) {
        return this.core.fetch('/v1/cancellation_reasons', 'post', body);
    };
    /**
     * Retrieves details of a specific cancellation reason.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_cancellation_reason = function (metadata) {
        return this.core.fetch('/v1/cancellation_reasons/{id}', 'get', metadata);
    };
    SDK.prototype.update_cancellation_reason = function (body, metadata) {
        return this.core.fetch('/v1/cancellation_reasons/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific cancellation reason.
     *
     * @summary Delete
     */
    SDK.prototype.delete_cancellation_reason = function (metadata) {
        return this.core.fetch('/v1/cancellation_reasons/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your charges.
     *
     * @summary List
     */
    SDK.prototype.list_charge = function (metadata) {
        return this.core.fetch('/v1/charges', 'get', metadata);
    };
    /**
     * Retrieves details of a specific charge.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_charge = function (metadata) {
        return this.core.fetch('/v1/charges/{id}', 'get', metadata);
    };
    /**
     * Retrieves details of the current account's checkout portal protocol.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_checkout_portal_protocol = function () {
        return this.core.fetch('/v1/checkout_portal_protocol', 'get');
    };
    /**
     * Updates the current account's checkout portal protocol.
     *
     * @summary Update
     */
    SDK.prototype.update_checkout_portal_protocol = function (body) {
        return this.core.fetch('/v1/checkout_portal_protocol', 'patch', body);
    };
    /**
     * Returns a list of your checkouts.
     *
     * @summary List
     */
    SDK.prototype.list_checkout = function (metadata) {
        return this.core.fetch('/v1/checkouts', 'get', metadata);
    };
    /**
     * Creates a new checkout.
     *
     * @summary Create
     */
    SDK.prototype.create_checkout = function (body) {
        return this.core.fetch('/v1/checkouts', 'post', body);
    };
    /**
     * Retrieves details of a specific checkout.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_checkout = function (metadata) {
        return this.core.fetch('/v1/checkouts/{id}', 'get', metadata);
    };
    SDK.prototype.update_checkout = function (body, metadata) {
        return this.core.fetch('/v1/checkouts/{id}', 'patch', body, metadata);
    };
    /**
     * Finalizes a specific checkout before it can be paid. If succesfull, this will return an
     * associated `PaymentIntent` with the necessary information to capture the payment via the
     * specific processor.
     *
     * @summary Finalize
     */
    SDK.prototype.finalize_checkout = function (metadata) {
        return this.core.fetch('/v1/checkouts/{id}/finalize', 'patch', metadata);
    };
    /**
     * Manually marks a checkout as paid. This can only be performed on checkouts that have
     * been finalized. When a checkout is paid associated purchases and subscriptions will be
     * created.
     *
     * @summary Manually Pay
     */
    SDK.prototype.manually_pay_checkout = function (metadata) {
        return this.core.fetch('/v1/checkouts/{id}/manually_pay', 'patch', metadata);
    };
    /**
     * Cancels a specific checkout. This action can only be performed on checkouts that are
     * `paid` or `processing`. When a checkout is canceled associated purchases will be revoked
     * and subscriptions will be canceled.
     *
     * @summary Cancel
     */
    SDK.prototype.cancel_checkout = function (metadata) {
        return this.core.fetch('/v1/checkouts/{id}/cancel', 'patch', metadata);
    };
    /**
     * Records an offer for the specific bump – used for bump analytics.
     *
     * @summary Offer Bump
     */
    SDK.prototype.offer_bump_checkout = function (metadata) {
        return this.core.fetch('/v1/checkouts/{id}/offer_bump/{bump_id}', 'patch', metadata);
    };
    /**
     * Records an offer for the specific upsell – used for upsell analytics.
     *
     * @summary Offer Upsell
     */
    SDK.prototype.offer_upsell_checkout = function (metadata) {
        return this.core.fetch('/v1/checkouts/{id}/offer_upsell/{upsell_id}', 'patch', metadata);
    };
    /**
     * Records a decline for the specific upsell – used for upsell analytics and to traverse
     * through an upsell funnel by refreshing the `current_upsell`.
     *
     * @summary Decline Upsell
     */
    SDK.prototype.decline_upsell_checkout = function (metadata) {
        return this.core.fetch('/v1/checkouts/{id}/decline_upsell/{upsell_id}', 'patch', metadata);
    };
    /**
     * Returns a list of your clicks.
     *
     * @summary List
     */
    SDK.prototype.list_click = function (metadata) {
        return this.core.fetch('/v1/clicks', 'get', metadata);
    };
    /**
     * Retrieves details of a specific click.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_click = function (metadata) {
        return this.core.fetch('/v1/clicks/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your coupons.
     *
     * @summary List
     */
    SDK.prototype.list_coupon = function (metadata) {
        return this.core.fetch('/v1/coupons', 'get', metadata);
    };
    /**
     * Creates a new coupon.
     *
     * @summary Create
     */
    SDK.prototype.create_coupon = function (body) {
        return this.core.fetch('/v1/coupons', 'post', body);
    };
    /**
     * Retrieves details of a specific coupon.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_coupon = function (metadata) {
        return this.core.fetch('/v1/coupons/{id}', 'get', metadata);
    };
    SDK.prototype.update_coupon = function (body, metadata) {
        return this.core.fetch('/v1/coupons/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific coupon.
     *
     * @summary Delete
     */
    SDK.prototype.delete_coupon = function (metadata) {
        return this.core.fetch('/v1/coupons/{id}', 'delete', metadata);
    };
    /**
     * Duplicates a specific coupon.
     *
     * @summary Duplicate
     */
    SDK.prototype.duplicate_coupon = function (metadata) {
        return this.core.fetch('/v1/coupons/{id}/duplicate', 'post', metadata);
    };
    /**
     * Retrieves details of the current account's customer notification protocol.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_customer_notification_protocol = function () {
        return this.core.fetch('/v1/customer_notification_protocol', 'get');
    };
    /**
     * Updates the current account's customer notification protocol.
     *
     * @summary Update
     */
    SDK.prototype.update_customer_notification_protocol = function (body) {
        return this.core.fetch('/v1/customer_notification_protocol', 'patch', body);
    };
    /**
     * Retrieves details of the current account's customer portal protocol.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_customer_portal_protocol = function () {
        return this.core.fetch('/v1/customer_portal_protocol', 'get');
    };
    /**
     * Updates the current account's customer portal protocol.
     *
     * @summary Update
     */
    SDK.prototype.update_customer_portal_protocol = function (body) {
        return this.core.fetch('/v1/customer_portal_protocol', 'patch', body);
    };
    /**
     * Returns a list of your customers.
     *
     * @summary List
     */
    SDK.prototype.list_customer = function (metadata) {
        return this.core.fetch('/v1/customers', 'get', metadata);
    };
    /**
     * Creates a new customer.
     *
     * @summary Create
     */
    SDK.prototype.create_customer = function (body) {
        return this.core.fetch('/v1/customers', 'post', body);
    };
    /**
     * Retrieves details of a specific customer.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_customer = function (metadata) {
        return this.core.fetch('/v1/customers/{id}', 'get', metadata);
    };
    SDK.prototype.update_customer = function (body, metadata) {
        return this.core.fetch('/v1/customers/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific customer.
     *
     * @summary Delete
     */
    SDK.prototype.delete_customer = function (metadata) {
        return this.core.fetch('/v1/customers/{id}', 'delete', metadata);
    };
    /**
     * Exposes a specific media that the customer has access to via a purchase.
     *
     * @summary Expose Media
     */
    SDK.prototype.expose_media_customer = function (metadata) {
        return this.core.fetch('/v1/customers/{id}/expose/{media_id}', 'get', metadata);
    };
    /**
     * Returns a list of discounts (only redeemed discounts).
     *
     * @summary List Discounts
     */
    SDK.prototype.list_discounts_discount = function (metadata) {
        return this.core.fetch('/v1/discounts', 'get', metadata);
    };
    /**
     * Retrieves details of a specific discount (only redeemed discounts).
     *
     * @summary Retrieve Discount
     */
    SDK.prototype.retrieve_discount_discount = function (metadata) {
        return this.core.fetch('/v1/discounts/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your display currencies.
     *
     * @summary List
     */
    SDK.prototype.list_display_currency = function () {
        return this.core.fetch('/v1/display_currencies', 'get');
    };
    /**
     * Creates a new display currency.
     *
     * @summary Create
     */
    SDK.prototype.create_display_currency = function (body) {
        return this.core.fetch('/v1/display_currencies', 'post', body);
    };
    /**
     * Retrieves details of a specific display currency.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_display_currency = function (metadata) {
        return this.core.fetch('/v1/display_currencies/{id}', 'get', metadata);
    };
    /**
     * Deletes a specific display currency.
     *
     * @summary Delete
     */
    SDK.prototype.delete_display_currency = function (metadata) {
        return this.core.fetch('/v1/display_currencies/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your disputes.
     *
     * @summary List
     */
    SDK.prototype.list_dispute = function (metadata) {
        return this.core.fetch('/v1/disputes', 'get', metadata);
    };
    /**
     * Retrieves details of a specific dispute.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_dispute = function (metadata) {
        return this.core.fetch('/v1/disputes/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your downloads.
     *
     * @summary List
     */
    SDK.prototype.list_download = function (metadata) {
        return this.core.fetch('/v1/downloads', 'get', metadata);
    };
    /**
     * Creates a new download.
     *
     * @summary Create
     */
    SDK.prototype.create_download = function (body) {
        return this.core.fetch('/v1/downloads', 'post', body);
    };
    /**
     * Retrieves details of a specific download.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_download = function (metadata) {
        return this.core.fetch('/v1/downloads/{id}', 'get', metadata);
    };
    SDK.prototype.update_download = function (body, metadata) {
        return this.core.fetch('/v1/downloads/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific download.
     *
     * @summary Delete
     */
    SDK.prototype.delete_download = function (metadata) {
        return this.core.fetch('/v1/downloads/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your events.
     *
     * @summary List
     */
    SDK.prototype.list_event = function (metadata) {
        return this.core.fetch('/v1/events', 'get', metadata);
    };
    /**
     * Retrieves details of a specific event.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_event = function (metadata) {
        return this.core.fetch('/v1/events/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your exports.
     *
     * @summary List
     */
    SDK.prototype.list_export = function (metadata) {
        return this.core.fetch('/v1/exports', 'get', metadata);
    };
    /**
     * Creates a new export.
     *
     * @summary Create
     */
    SDK.prototype.create_export = function (body) {
        return this.core.fetch('/v1/exports', 'post', body);
    };
    /**
     * Retrieves details of a specific export.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_export = function (metadata) {
        return this.core.fetch('/v1/exports/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your fees.
     *
     * @summary List
     */
    SDK.prototype.list_fee = function (metadata) {
        return this.core.fetch('/v1/fees', 'get', metadata);
    };
    /**
     * Creates a new fee.
     *
     * @summary Create
     */
    SDK.prototype.create_fee = function (body) {
        return this.core.fetch('/v1/fees', 'post', body);
    };
    /**
     * Retrieves details of a specific fee.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_fee = function (metadata) {
        return this.core.fetch('/v1/fees/{id}', 'get', metadata);
    };
    SDK.prototype.update_fee = function (body, metadata) {
        return this.core.fetch('/v1/fees/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific fee.
     *
     * @summary Delete
     */
    SDK.prototype.delete_fee = function (metadata) {
        return this.core.fetch('/v1/fees/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your fulfillment items.
     *
     * @summary List
     */
    SDK.prototype.list_fulfillment_item = function (metadata) {
        return this.core.fetch('/v1/fulfillment_items', 'get', metadata);
    };
    /**
     * Retrieves details of a specific fulfillment item.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_fulfillment_item = function (metadata) {
        return this.core.fetch('/v1/fulfillment_items/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your fulfillments.
     *
     * @summary List
     */
    SDK.prototype.list_fulfillment = function (metadata) {
        return this.core.fetch('/v1/fulfillments', 'get', metadata);
    };
    /**
     * Creates a new fulfillment.
     *
     * @summary Create
     */
    SDK.prototype.create_fulfillment = function (body) {
        return this.core.fetch('/v1/fulfillments', 'post', body);
    };
    /**
     * Retrieves details of a specific fulfillment.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_fulfillment = function (metadata) {
        return this.core.fetch('/v1/fulfillments/{id}', 'get', metadata);
    };
    SDK.prototype.update_fulfillment = function (body, metadata) {
        return this.core.fetch('/v1/fulfillments/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific fulfillment.
     *
     * @summary Delete
     */
    SDK.prototype.delete_fulfillment = function (metadata) {
        return this.core.fetch('/v1/fulfillments/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your imports.
     *
     * @summary List
     */
    SDK.prototype.list_import = function (metadata) {
        return this.core.fetch('/v1/imports', 'get', metadata);
    };
    /**
     * Retrieves details of a specific import.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_import = function (metadata) {
        return this.core.fetch('/v1/imports/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your invoices.
     *
     * @summary List
     */
    SDK.prototype.list_invoice = function (metadata) {
        return this.core.fetch('/v1/invoices', 'get', metadata);
    };
    /**
     * Creates a new invoice.
     *
     * @summary Create
     */
    SDK.prototype.create_invoice = function (body) {
        return this.core.fetch('/v1/invoices', 'post', body);
    };
    /**
     * Retrieves details of a specific invoice.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_invoice = function (metadata) {
        return this.core.fetch('/v1/invoices/{id}', 'get', metadata);
    };
    SDK.prototype.update_invoice = function (body, metadata) {
        return this.core.fetch('/v1/invoices/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific invoice.
     *
     * @summary Delete
     */
    SDK.prototype.delete_invoice = function (metadata) {
        return this.core.fetch('/v1/invoices/{id}', 'delete', metadata);
    };
    /**
     * Revert an open invoice back to draft.
     *
     * @summary Make Draft
     */
    SDK.prototype.make_draft_invoice = function (metadata) {
        return this.core.fetch('/v1/invoices/{id}/make_draft', 'patch', metadata);
    };
    /**
     * Open an invoice to send it to the customer or collect payment immediately.
     *
     * @summary Open
     */
    SDK.prototype.open_invoice = function (metadata) {
        return this.core.fetch('/v1/invoices/{id}/open', 'patch', metadata);
    };
    /**
     * Resend invoice to the customer.
     *
     * @summary Resend Notification
     */
    SDK.prototype.resend_notification_invoice = function (metadata) {
        return this.core.fetch('/v1/invoices/{id}/resend_notification', 'post', metadata);
    };
    /**
     * Returns a list of your licenses.
     *
     * @summary List
     */
    SDK.prototype.list_license = function (metadata) {
        return this.core.fetch('/v1/licenses', 'get', metadata);
    };
    /**
     * Creates a new license.
     *
     * @summary Create
     */
    SDK.prototype.create_license = function (body) {
        return this.core.fetch('/v1/licenses', 'post', body);
    };
    /**
     * Retrieves details of a specific license.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_license = function (metadata) {
        return this.core.fetch('/v1/licenses/{id}', 'get', metadata);
    };
    SDK.prototype.update_license = function (body, metadata) {
        return this.core.fetch('/v1/licenses/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific license.
     *
     * @summary Delete
     */
    SDK.prototype.delete_license = function (metadata) {
        return this.core.fetch('/v1/licenses/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your line_items.
     *
     * @summary List
     */
    SDK.prototype.list_line_item = function (metadata) {
        return this.core.fetch('/v1/line_items', 'get', metadata);
    };
    /**
     * Creates a new line item.
     *
     * @summary Create
     */
    SDK.prototype.create_line_item = function (body, metadata) {
        return this.core.fetch('/v1/line_items', 'post', body, metadata);
    };
    /**
     * Retrieves details of a specific line item.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_line_item = function (metadata) {
        return this.core.fetch('/v1/line_items/{id}', 'get', metadata);
    };
    SDK.prototype.update_line_item = function (body, metadata) {
        return this.core.fetch('/v1/line_items/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific line item.
     *
     * @summary Delete
     */
    SDK.prototype.delete_line_item = function (metadata) {
        return this.core.fetch('/v1/line_items/{id}', 'delete', metadata);
    };
    /**
     * Creates a new line item as an upsell. An attempt to pay the upsell will be made using
     * the payment method on the checkout.
     *
     * @summary Upsell
     */
    SDK.prototype.upsell_line_item = function (body, metadata) {
        return this.core.fetch('/v1/line_items/upsell', 'post', body, metadata);
    };
    /**
     * Performs a swap on the line item for the specific swap price.
     *
     * @summary Swap
     */
    SDK.prototype.swap_line_item = function (metadata) {
        return this.core.fetch('/v1/line_items/{id}/swap', 'patch', metadata);
    };
    /**
     * Reverses the swap on the line item for the original price.
     *
     * @summary Unswap
     */
    SDK.prototype.unswap_line_item = function (metadata) {
        return this.core.fetch('/v1/line_items/{id}/unswap', 'patch', metadata);
    };
    /**
     * Records an offer for the specific swap – used for swap analytics.
     *
     * @summary Offer Swap
     */
    SDK.prototype.offer_swap_line_item = function (metadata) {
        return this.core.fetch('/v1/line_items/{id}/offer_swap', 'patch', metadata);
    };
    /**
     * Returns a list of your manual charges.
     *
     * @summary List
     */
    SDK.prototype.list_manual_charge = function (metadata) {
        return this.core.fetch('/v1/manual_charges', 'get', metadata);
    };
    /**
     * Retrieves details of a specific manual charge.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_manual_charge = function (metadata) {
        return this.core.fetch('/v1/manual_charges/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your manual payment methods.
     *
     * @summary List
     */
    SDK.prototype.list_manual_payment_method = function (metadata) {
        return this.core.fetch('/v1/manual_payment_methods', 'get', metadata);
    };
    /**
     * Creates a new manual_payment_method.
     *
     * @summary Create
     */
    SDK.prototype.create_manual_payment_method = function (body) {
        return this.core.fetch('/v1/manual_payment_methods', 'post', body);
    };
    /**
     * Retrieves details of a specific manual payment method.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_manual_payment_method = function (metadata) {
        return this.core.fetch('/v1/manual_payment_methods/{id}', 'get', metadata);
    };
    SDK.prototype.update_manual_payment_method = function (body, metadata) {
        return this.core.fetch('/v1/manual_payment_methods/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific manual payment method.
     *
     * @summary Delete
     */
    SDK.prototype.delete_manual_payment_method = function (metadata) {
        return this.core.fetch('/v1/manual_payment_methods/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your medias.
     *
     * @summary List
     */
    SDK.prototype.list_media = function (metadata) {
        return this.core.fetch('/v1/medias', 'get', metadata);
    };
    /**
     * Creates a new media.
     *
     * @summary Create
     */
    SDK.prototype.create_media = function (body) {
        return this.core.fetch('/v1/medias', 'post', body);
    };
    /**
     * Retrieves details of a specific media.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_media = function (metadata) {
        return this.core.fetch('/v1/medias/{id}', 'get', metadata);
    };
    SDK.prototype.update_media = function (body, metadata) {
        return this.core.fetch('/v1/medias/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific media.
     *
     * @summary Delete
     */
    SDK.prototype.delete_media = function (metadata) {
        return this.core.fetch('/v1/medias/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your notes.
     *
     * @summary List
     */
    SDK.prototype.list_note = function (metadata) {
        return this.core.fetch('/v1/notes', 'get', metadata);
    };
    /**
     * Creates a new note.
     *
     * @summary Create
     */
    SDK.prototype.create_note = function (body) {
        return this.core.fetch('/v1/notes', 'post', body);
    };
    /**
     * Retrieves details of a specific note.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_note = function (metadata) {
        return this.core.fetch('/v1/notes/{id}', 'get', metadata);
    };
    SDK.prototype.update_note = function (body, metadata) {
        return this.core.fetch('/v1/notes/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific note.
     *
     * @summary Delete
     */
    SDK.prototype.delete_note = function (metadata) {
        return this.core.fetch('/v1/notes/{id}', 'delete', metadata);
    };
    /**
     * Retrieves details of the current account's order protocol.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_order_protocol = function () {
        return this.core.fetch('/v1/order_protocol', 'get');
    };
    /**
     * Updates the current account's order protocol.
     *
     * @summary Update
     */
    SDK.prototype.update_order_protocol = function (body) {
        return this.core.fetch('/v1/order_protocol', 'patch', body);
    };
    /**
     * Returns a list of your orders.
     *
     * @summary List
     */
    SDK.prototype.list_order = function (metadata) {
        return this.core.fetch('/v1/orders', 'get', metadata);
    };
    /**
     * Retrieves details of a specific order.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_order = function (metadata) {
        return this.core.fetch('/v1/orders/{id}', 'get', metadata);
    };
    /**
     * Resend order confirmation or subscription renewal email to the customer.
     *
     * @summary Resend Notification
     */
    SDK.prototype.resend_notification_order = function (metadata) {
        return this.core.fetch('/v1/orders/{id}/resend_notification', 'post', metadata);
    };
    /**
     * Returns a list of your payment failures.
     *
     * @summary List
     */
    SDK.prototype.list_payment_failure = function (metadata) {
        return this.core.fetch('/v1/payment_failures', 'get', metadata);
    };
    /**
     * Returns a list of your payment intents.
     *
     * @summary List
     */
    SDK.prototype.list_payment_intent = function (metadata) {
        return this.core.fetch('/v1/payment_intents', 'get', metadata);
    };
    /**
     * Creates a new payment intent.
     *
     * @summary Create
     */
    SDK.prototype.create_payment_intent = function (body) {
        return this.core.fetch('/v1/payment_intents', 'post', body);
    };
    /**
     * Retrieves details of a specific payment intent.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_payment_intent = function (metadata) {
        return this.core.fetch('/v1/payment_intents/{id}', 'get', metadata);
    };
    /**
     * Capture a specific payment intent.
     *
     * @summary Capture
     */
    SDK.prototype.capture_payment_intent = function (metadata) {
        return this.core.fetch('/v1/payment_intents/{id}/capture', 'patch', metadata);
    };
    /**
     * Returns a list of your payment methods.
     *
     * @summary List
     */
    SDK.prototype.list_payment_method = function (metadata) {
        return this.core.fetch('/v1/payment_methods', 'get', metadata);
    };
    /**
     * Retrieves details of a specific payment method.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_payment_method = function (metadata) {
        return this.core.fetch('/v1/payment_methods/{id}', 'get', metadata);
    };
    /**
     * Detaches a payment method from the associated customer.
     *
     * @summary Detach
     */
    SDK.prototype.detach_payment_method = function (metadata) {
        return this.core.fetch('/v1/payment_methods/{id}/detach', 'patch', metadata);
    };
    /**
     * Returns a list of your payout groups.
     *
     * @summary List
     */
    SDK.prototype.list_payout_group = function (metadata) {
        return this.core.fetch('/v1/payout_groups', 'get', metadata);
    };
    /**
     * Creates a new payout group.
     *
     * @summary Create
     */
    SDK.prototype.create_payout_group = function (body) {
        return this.core.fetch('/v1/payout_groups', 'post', body);
    };
    /**
     * Retrieves details of a specific payout group.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_payout_group = function (metadata) {
        return this.core.fetch('/v1/payout_groups/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your payouts.
     *
     * @summary List
     */
    SDK.prototype.list_payout = function (metadata) {
        return this.core.fetch('/v1/payouts', 'get', metadata);
    };
    /**
     * Creates a new payout.
     *
     * @summary Create
     */
    SDK.prototype.create_payout = function (body) {
        return this.core.fetch('/v1/payouts', 'post', body);
    };
    /**
     * Retrieves details of a specific payout.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_payout = function (metadata) {
        return this.core.fetch('/v1/payouts/{id}', 'get', metadata);
    };
    /**
     * Deletes a specific payout.
     *
     * @summary Delete
     */
    SDK.prototype.delete_payout = function (metadata) {
        return this.core.fetch('/v1/payouts/{id}', 'delete', metadata);
    };
    /**
     * Completes a specific payout.
     *
     * @summary Complete
     */
    SDK.prototype.complete_payout = function (metadata) {
        return this.core.fetch('/v1/payouts/{id}/complete', 'patch', metadata);
    };
    /**
     * Makes a specific payout processing.
     *
     * @summary Make Processing
     */
    SDK.prototype.make_processing_payout = function (metadata) {
        return this.core.fetch('/v1/payouts/{id}/make_processing', 'patch', metadata);
    };
    /**
     * Returns a list of periods.
     *
     * @summary List
     */
    SDK.prototype.list_period = function (metadata) {
        return this.core.fetch('/v1/periods', 'get', metadata);
    };
    SDK.prototype.update_period = function (body, metadata) {
        return this.core.fetch('/v1/periods/{id}', 'patch', body, metadata);
    };
    /**
     * Retries payment for a specific period.
     *
     * @summary Retry Payment
     */
    SDK.prototype.retry_payment_period = function (metadata) {
        return this.core.fetch('/v1/periods/{id}/retry_payment', 'patch', metadata);
    };
    /**
     * Returns a list of your prices.
     *
     * @summary List
     */
    SDK.prototype.list_price = function (metadata) {
        return this.core.fetch('/v1/prices', 'get', metadata);
    };
    /**
     * Creates a new price.
     *
     * @summary Create
     */
    SDK.prototype.create_price = function (body) {
        return this.core.fetch('/v1/prices', 'post', body);
    };
    /**
     * Retrieves details of a specific price.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_price = function (metadata) {
        return this.core.fetch('/v1/prices/{id}', 'get', metadata);
    };
    SDK.prototype.update_price = function (body, metadata) {
        return this.core.fetch('/v1/prices/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific price.
     *
     * @summary Delete
     */
    SDK.prototype.delete_price = function (metadata) {
        return this.core.fetch('/v1/prices/{id}', 'delete', metadata);
    };
    /**
     * Duplicates a specific price.
     *
     * @summary Duplicate
     */
    SDK.prototype.duplicate_price = function (metadata) {
        return this.core.fetch('/v1/prices/{id}/duplicate', 'post', metadata);
    };
    /**
     * Returns a list of your processors.
     *
     * @summary List
     */
    SDK.prototype.list_processor = function (metadata) {
        return this.core.fetch('/v1/processors', 'get', metadata);
    };
    /**
     * Retrieves details of a specific processor.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_processor = function (metadata) {
        return this.core.fetch('/v1/processors/{id}', 'get', metadata);
    };
    /**
     * Retrieves a list of available payment method types for this specific processor and the
     * given parameters (amount, country, etc.). This endpoint is only available for `mollie`
     * processors.
     *
     * @summary Payment Method Types
     */
    SDK.prototype.payment_method_types_processor = function (metadata) {
        return this.core.fetch('/v1/processors/{id}/payment_method_types', 'get', metadata);
    };
    /**
     * Returns a list of your product collections
     *
     * @summary List
     */
    SDK.prototype.list_product_collection = function (metadata) {
        return this.core.fetch('/v1/product_collections', 'get', metadata);
    };
    /**
     * Creates a new product collection.
     *
     * @summary Create
     */
    SDK.prototype.create_product_collection = function (body) {
        return this.core.fetch('/v1/product_collections', 'post', body);
    };
    /**
     * Retrieves details of a specific product collection. The `{id}` section of the endpoint
     * accepts the product collection ID or slug.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_product_collection = function (metadata) {
        return this.core.fetch('/v1/product_collections/{id}', 'get', metadata);
    };
    SDK.prototype.update_product_collection = function (body, metadata) {
        return this.core.fetch('/v1/product_collections/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific product collection.
     *
     * @summary Delete
     */
    SDK.prototype.delete_product_collection = function (metadata) {
        return this.core.fetch('/v1/product_collections/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your product groups.
     *
     * @summary List
     */
    SDK.prototype.list_product_group = function (metadata) {
        return this.core.fetch('/v1/product_groups', 'get', metadata);
    };
    /**
     * Creates a new product group.
     *
     * @summary Create
     */
    SDK.prototype.create_product_group = function (body) {
        return this.core.fetch('/v1/product_groups', 'post', body);
    };
    /**
     * Retrieves details of a specific product group.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_product_group = function (metadata) {
        return this.core.fetch('/v1/product_groups/{id}', 'get', metadata);
    };
    SDK.prototype.update_product_group = function (body, metadata) {
        return this.core.fetch('/v1/product_groups/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific product group.
     *
     * @summary Delete
     */
    SDK.prototype.delete_product_group = function (metadata) {
        return this.core.fetch('/v1/product_groups/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your product medias.
     *
     * @summary List
     */
    SDK.prototype.list_product_media = function (metadata) {
        return this.core.fetch('/v1/product_medias', 'get', metadata);
    };
    /**
     * Create a new product media.
     *
     * @summary Create
     */
    SDK.prototype.create_product_media = function (body) {
        return this.core.fetch('/v1/product_medias', 'post', body);
    };
    /**
     * Retrieves details of a specific product media.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_product_media = function (metadata) {
        return this.core.fetch('/v1/product_medias/{id}', 'get', metadata);
    };
    SDK.prototype.update_product_media = function (body, metadata) {
        return this.core.fetch('/v1/product_medias/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific product media.
     *
     * @summary Delete
     */
    SDK.prototype.delete_product_media = function (metadata) {
        return this.core.fetch('/v1/product_medias/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your products.
     *
     * @summary List
     */
    SDK.prototype.list_product = function (metadata) {
        return this.core.fetch('/v1/products', 'get', metadata);
    };
    /**
     * Creates a new product.
     *
     * @summary Create
     */
    SDK.prototype.create_product = function (body) {
        return this.core.fetch('/v1/products', 'post', body);
    };
    /**
     * Retrieves details of a specific product. The `{id}` section of this endpoint accepts the
     * product ID or slug.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_product = function (metadata) {
        return this.core.fetch('/v1/products/{id}', 'get', metadata);
    };
    SDK.prototype.update_product = function (body, metadata) {
        return this.core.fetch('/v1/products/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific product.
     *
     * @summary Delete
     */
    SDK.prototype.delete_product = function (metadata) {
        return this.core.fetch('/v1/products/{id}', 'delete', metadata);
    };
    /**
     * Duplicates a specific product.
     *
     * @summary Duplicate
     */
    SDK.prototype.duplicate_product = function (metadata) {
        return this.core.fetch('/v1/products/{id}/duplicate', 'post', metadata);
    };
    /**
     * Returns a list of your promotions.
     *
     * @summary List
     */
    SDK.prototype.list_promotion = function (metadata) {
        return this.core.fetch('/v1/promotions', 'get', metadata);
    };
    /**
     * Creates a new promotion.
     *
     * @summary Create
     */
    SDK.prototype.create_promotion = function (body) {
        return this.core.fetch('/v1/promotions', 'post', body);
    };
    /**
     * Retrieves details of a specific promotion.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_promotion = function (metadata) {
        return this.core.fetch('/v1/promotions/{id}', 'get', metadata);
    };
    SDK.prototype.update_promotion = function (body, metadata) {
        return this.core.fetch('/v1/promotions/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific promotion.
     *
     * @summary Delete
     */
    SDK.prototype.delete_promotion = function (metadata) {
        return this.core.fetch('/v1/promotions/{id}', 'delete', metadata);
    };
    /**
     * Creates a new activation. If an activation already exists with the same `fingerprint`
     * then it will be updated and returned.
     *
     * @summary Create (Public)
     */
    SDK.prototype.createPublic_activation = function (body) {
        return this.core.fetch('/v1/public/activations', 'post', body);
    };
    /**
     * Retrieves details of a specific activation.
     *
     * @summary Retrieve (Public)
     */
    SDK.prototype.retrievePublic_activation = function (metadata) {
        return this.core.fetch('/v1/public/activations/{id}', 'get', metadata);
    };
    SDK.prototype.updatePublic_activation = function (body, metadata) {
        return this.core.fetch('/v1/public/activations/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific activation.
     *
     * @summary Delete (Public)
     */
    SDK.prototype.deletePublic_activation = function (metadata) {
        return this.core.fetch('/v1/public/activations/{id}', 'delete', metadata);
    };
    /**
     * Retrieves details of a specific checkout.
     *
     * @summary Retrieve (Public)
     */
    SDK.prototype.retrievePublic_checkout = function (metadata) {
        return this.core.fetch('/v1/public/checkouts/{id}', 'get', metadata);
    };
    /**
     * Creates a new click.
     *
     * @summary Create (Public)
     */
    SDK.prototype.createPublic_click = function (body) {
        return this.core.fetch('/v1/public/clicks', 'post', body);
    };
    /**
     * Retrieves a license by it's key.
     *
     * @summary Retrieve (Public)
     */
    SDK.prototype.retrievePublic_license = function (metadata) {
        return this.core.fetch('/v1/public/licenses/{key}', 'get', metadata);
    };
    /**
     * Exposes the current release media for the license.
     *
     * @summary Expose Current Release (Public)
     */
    SDK.prototype.expose_current_releasePublic_license = function (metadata) {
        return this.core.fetch('/v1/public/licenses/{key}/expose_current_release', 'get', metadata);
    };
    /**
     * Returns a list of purchases.
     *
     * @summary List
     */
    SDK.prototype.list_purchase = function (metadata) {
        return this.core.fetch('/v1/purchases', 'get', metadata);
    };
    /**
     * Creates a new purchase.
     *
     * @summary Create
     */
    SDK.prototype.create_purchase = function (body) {
        return this.core.fetch('/v1/purchases', 'post', body);
    };
    /**
     * Retrieves details of a specific purchase.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_purchase = function (metadata) {
        return this.core.fetch('/v1/purchases/{id}', 'get', metadata);
    };
    SDK.prototype.update_purchase = function (body, metadata) {
        return this.core.fetch('/v1/purchases/{id}', 'patch', body, metadata);
    };
    /**
     * Invokes a specific purchase.
     *
     * @summary Invoke
     */
    SDK.prototype.invoke_purchase = function (metadata) {
        return this.core.fetch('/v1/purchases/{id}/invoke', 'patch', metadata);
    };
    /**
     * Revokes a specific purchase.
     *
     * @summary Revoke
     */
    SDK.prototype.revoke_purchase = function (metadata) {
        return this.core.fetch('/v1/purchases/{id}/revoke', 'patch', metadata);
    };
    /**
     * Returns a list of your referral items.
     *
     * @summary List
     */
    SDK.prototype.list_referral_item = function (metadata) {
        return this.core.fetch('/v1/referral_items', 'get', metadata);
    };
    /**
     * Retrieves details of a specific referral item.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_referral_item = function (metadata) {
        return this.core.fetch('/v1/referral_items/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your referrals.
     *
     * @summary List
     */
    SDK.prototype.list_referral = function (metadata) {
        return this.core.fetch('/v1/referrals', 'get', metadata);
    };
    /**
     * Creates a new referral.
     *
     * @summary Create
     */
    SDK.prototype.create_referral = function (body) {
        return this.core.fetch('/v1/referrals', 'post', body);
    };
    /**
     * Retrieves details of a specific referral.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_referral = function (metadata) {
        return this.core.fetch('/v1/referrals/{id}', 'get', metadata);
    };
    SDK.prototype.update_referral = function (body, metadata) {
        return this.core.fetch('/v1/referrals/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific referral.
     *
     * @summary Delete
     */
    SDK.prototype.delete_referral = function (metadata) {
        return this.core.fetch('/v1/referrals/{id}', 'delete', metadata);
    };
    /**
     * Approves a specific referral.
     *
     * @summary Approve
     */
    SDK.prototype.approve_referral = function (metadata) {
        return this.core.fetch('/v1/referrals/{id}/approve', 'patch', metadata);
    };
    /**
     * Denies a specific referral.
     *
     * @summary Deny
     */
    SDK.prototype.deny_referral = function (metadata) {
        return this.core.fetch('/v1/referrals/{id}/deny', 'patch', metadata);
    };
    /**
     * Makes a specific referral reveiwing.
     *
     * @summary Make Reviewing
     */
    SDK.prototype.make_reviewing_referral = function (metadata) {
        return this.core.fetch('/v1/referrals/{id}/make_reviewing', 'patch', metadata);
    };
    /**
     * Returns a list of your refund items.
     *
     * @summary List
     */
    SDK.prototype.list_refund_item = function (metadata) {
        return this.core.fetch('/v1/refund_items', 'get', metadata);
    };
    /**
     * Retrieves details of a specific refund item.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_refund_item = function (metadata) {
        return this.core.fetch('/v1/refund_items/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your refunds.
     *
     * @summary List
     */
    SDK.prototype.list_refund = function (metadata) {
        return this.core.fetch('/v1/refunds', 'get', metadata);
    };
    /**
     * Creates a new refund.
     *
     * @summary Create
     */
    SDK.prototype.create_refund = function (body, metadata) {
        return this.core.fetch('/v1/refunds', 'post', body, metadata);
    };
    /**
     * Retrieves details of a specific refund.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_refund = function (metadata) {
        return this.core.fetch('/v1/refunds/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your return items.
     *
     * @summary List
     */
    SDK.prototype.list_return_item = function (metadata) {
        return this.core.fetch('/v1/return_items', 'get', metadata);
    };
    /**
     * Retrieves details of a specific return item.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_return_item = function (metadata) {
        return this.core.fetch('/v1/return_items/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your return requests.
     *
     * @summary List
     */
    SDK.prototype.list_return_request = function (metadata) {
        return this.core.fetch('/v1/return_requests', 'get', metadata);
    };
    /**
     * Creates a new return request.
     *
     * @summary Create
     */
    SDK.prototype.create_return_request = function (body) {
        return this.core.fetch('/v1/return_requests', 'post', body);
    };
    /**
     * Retrieves details of a specific return request.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_return_request = function (metadata) {
        return this.core.fetch('/v1/return_requests/{id}', 'get', metadata);
    };
    SDK.prototype.update_return_request = function (body, metadata) {
        return this.core.fetch('/v1/return_requests/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific return request.
     *
     * @summary Delete
     */
    SDK.prototype.delete_return_request = function (metadata) {
        return this.core.fetch('/v1/return_requests/{id}', 'delete', metadata);
    };
    /**
     * Updates status of a specific return request to `open`.
     *
     * @summary Open
     */
    SDK.prototype.open_return_request = function (metadata) {
        return this.core.fetch('/v1/return_requests/{id}/open', 'patch', metadata);
    };
    /**
     * Updates status of a specific return request to `complete`.
     *
     * @summary Complete
     */
    SDK.prototype.complete_return_request = function (metadata) {
        return this.core.fetch('/v1/return_requests/{id}/complete', 'patch', metadata);
    };
    /**
     * Returns a list of possible return reasons.
     *
     * @summary List Return Reasons
     */
    SDK.prototype.list_return_reasons_return_request = function () {
        return this.core.fetch('/v1/return_reasons', 'get');
    };
    /**
     * Returns a list of your review medias.
     *
     * @summary List
     */
    SDK.prototype.list_review_media = function (metadata) {
        return this.core.fetch('/v1/review_medias', 'get', metadata);
    };
    /**
     * Create a new review media.
     *
     * @summary Create
     */
    SDK.prototype.create_review_media = function (body) {
        return this.core.fetch('/v1/review_medias', 'post', body);
    };
    /**
     * Retrieves details of a specific review media.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_review_media = function (metadata) {
        return this.core.fetch('/v1/review_medias/{id}', 'get', metadata);
    };
    /**
     * Deletes a specific review media.
     *
     * @summary Delete
     */
    SDK.prototype.delete_review_media = function (metadata) {
        return this.core.fetch('/v1/review_medias/{id}', 'delete', metadata);
    };
    /**
     * Retrieves details of the current account's review protocol.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_review_protocol = function () {
        return this.core.fetch('/v1/review_protocol', 'get');
    };
    /**
     * Updates the current account's review protocol.
     *
     * @summary Update
     */
    SDK.prototype.update_review_protocol = function (body) {
        return this.core.fetch('/v1/review_protocol', 'patch', body);
    };
    /**
     * Returns a list of your reviews.
     *
     * @summary List
     */
    SDK.prototype.list_review = function (metadata) {
        return this.core.fetch('/v1/reviews', 'get', metadata);
    };
    /**
     * Creates a new review.
     *
     * @summary Create
     */
    SDK.prototype.create_review = function (body) {
        return this.core.fetch('/v1/reviews', 'post', body);
    };
    /**
     * Retrieves details of a specific review.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_review = function (metadata) {
        return this.core.fetch('/v1/reviews/{id}', 'get', metadata);
    };
    SDK.prototype.update_review = function (body, metadata) {
        return this.core.fetch('/v1/reviews/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific review.
     *
     * @summary Delete
     */
    SDK.prototype.delete_review = function (metadata) {
        return this.core.fetch('/v1/reviews/{id}', 'delete', metadata);
    };
    /**
     * Publishes a specific review.
     *
     * @summary Publish
     */
    SDK.prototype.publish_review = function (metadata) {
        return this.core.fetch('/v1/reviews/{id}/publish', 'patch', metadata);
    };
    /**
     * Unpublishes a specific review.
     *
     * @summary Unpublish
     */
    SDK.prototype.unpublish_review = function (metadata) {
        return this.core.fetch('/v1/reviews/{id}/unpublish', 'patch', metadata);
    };
    /**
     * Constructs a rule string from structured data.
     *
     * @summary Construct rule string
     */
    SDK.prototype.constructrulestring_rule_string = function (body) {
        return this.core.fetch('/v1/rule_strings/construct', 'post', body);
    };
    /**
     * Deconstructs a rule string into structured data.
     *
     * @summary Deconstruct rule string
     */
    SDK.prototype.deconstructrulestring_rule_string = function (body) {
        return this.core.fetch('/v1/rule_strings/deconstruct', 'post', body);
    };
    /**
     * Retrieves the schema definition for a rule schema.
     *
     * @summary Retrieve schema definition
     */
    SDK.prototype.retrieveschemadefinition_rule_string = function (metadata) {
        return this.core.fetch('/v1/rule_strings/schema/{schema_id}', 'get', metadata);
    };
    /**
     * Returns a list of your shipping methods.
     *
     * @summary List
     */
    SDK.prototype.list_shipping_method = function () {
        return this.core.fetch('/v1/shipping_methods', 'get');
    };
    /**
     * Creates a new shipping method.
     *
     * @summary Create
     */
    SDK.prototype.create_shipping_method = function (body) {
        return this.core.fetch('/v1/shipping_methods', 'post', body);
    };
    /**
     * Retrieves details of a specific shipping method.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_shipping_method = function (metadata) {
        return this.core.fetch('/v1/shipping_methods/{id}', 'get', metadata);
    };
    SDK.prototype.update_shipping_method = function (body, metadata) {
        return this.core.fetch('/v1/shipping_methods/{id}', 'patch', body, metadata);
    };
    /**
     * Returns a list of your shipping profiles.
     *
     * @summary List
     */
    SDK.prototype.list_shipping_profile = function () {
        return this.core.fetch('/v1/shipping_profiles', 'get');
    };
    /**
     * Creates a new shipping profile.
     *
     * @summary Create
     */
    SDK.prototype.create_shipping_profile = function (body) {
        return this.core.fetch('/v1/shipping_profiles', 'post', body);
    };
    /**
     * Retrieves details of a specific shipping profile.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_shipping_profile = function (metadata) {
        return this.core.fetch('/v1/shipping_profiles/{id}', 'get', metadata);
    };
    SDK.prototype.update_shipping_profile = function (body, metadata) {
        return this.core.fetch('/v1/shipping_profiles/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific shipping profile.
     *
     * @summary Delete
     */
    SDK.prototype.delete_shipping_profile = function (metadata) {
        return this.core.fetch('/v1/shipping_profiles/{id}', 'delete', metadata);
    };
    /**
     * Retrieves details of the current account's shipping protocol.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_shipping_protocol = function () {
        return this.core.fetch('/v1/shipping_protocol', 'get');
    };
    /**
     * Updates the current account's shipping protocol.
     *
     * @summary Update
     */
    SDK.prototype.update_shipping_protocol = function (body) {
        return this.core.fetch('/v1/shipping_protocol', 'patch', body);
    };
    /**
     * Returns a list of your shipping rates.
     *
     * @summary List
     */
    SDK.prototype.list_shipping_rate = function (metadata) {
        return this.core.fetch('/v1/shipping_rates', 'get', metadata);
    };
    /**
     * Creates a new shipping rate.
     *
     * @summary Create
     */
    SDK.prototype.create_shipping_rate = function (body) {
        return this.core.fetch('/v1/shipping_rates', 'post', body);
    };
    /**
     * Retrieves details of a specific shipping rate.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_shipping_rate = function (metadata) {
        return this.core.fetch('/v1/shipping_rates/{id}', 'get', metadata);
    };
    SDK.prototype.update_shipping_rate = function (body, metadata) {
        return this.core.fetch('/v1/shipping_rates/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific shipping rate.
     *
     * @summary Delete
     */
    SDK.prototype.delete_shipping_rate = function (metadata) {
        return this.core.fetch('/v1/shipping_rates/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your shipping zones.
     *
     * @summary List
     */
    SDK.prototype.list_shipping_zone = function (metadata) {
        return this.core.fetch('/v1/shipping_zones', 'get', metadata);
    };
    /**
     * Creates a new shipping zone.
     *
     * @summary Create
     */
    SDK.prototype.create_shipping_zone = function (body) {
        return this.core.fetch('/v1/shipping_zones', 'post', body);
    };
    /**
     * Retrieves details of a specific shipping zone.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_shipping_zone = function (metadata) {
        return this.core.fetch('/v1/shipping_zones/{id}', 'get', metadata);
    };
    SDK.prototype.update_shipping_zone = function (body, metadata) {
        return this.core.fetch('/v1/shipping_zones/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific shipping zone.
     *
     * @summary Delete
     */
    SDK.prototype.delete_shipping_zone = function (metadata) {
        return this.core.fetch('/v1/shipping_zones/{id}', 'delete', metadata);
    };
    /**
     * Returns order statistics.
     *
     * @summary Orders
     */
    SDK.prototype.orders_statistic = function (metadata) {
        return this.core.fetch('/v1/stats/orders', 'get', metadata);
    };
    /**
     * Retrieves details of the current account's subscription protocol.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_subscription_protocol = function () {
        return this.core.fetch('/v1/subscription_protocol', 'get');
    };
    /**
     * Updates the current account's subscription protocol.
     *
     * @summary Update
     */
    SDK.prototype.update_subscription_protocol = function (body) {
        return this.core.fetch('/v1/subscription_protocol', 'patch', body);
    };
    /**
     * Returns a list of your subscriptions.
     *
     * @summary List
     */
    SDK.prototype.list_subscription = function (metadata) {
        return this.core.fetch('/v1/subscriptions', 'get', metadata);
    };
    /**
     * Creates a new subscription.
     *
     * @summary Create
     */
    SDK.prototype.create_subscription = function (body) {
        return this.core.fetch('/v1/subscriptions', 'post', body);
    };
    /**
     * Retrieves details of a specific subscription.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_subscription = function (metadata) {
        return this.core.fetch('/v1/subscriptions/{id}', 'get', metadata);
    };
    SDK.prototype.update_subscription = function (body, metadata) {
        return this.core.fetch('/v1/subscriptions/{id}', 'patch', body, metadata);
    };
    SDK.prototype.cancelPause_subscription = function (body, metadata) {
        return this.core.fetch('/v1/subscriptions/{id}/cancel', 'patch', body, metadata);
    };
    /**
     * Completes a specific subscription.
     *
     * @summary Complete
     */
    SDK.prototype.complete_subscription = function (metadata) {
        return this.core.fetch('/v1/subscriptions/{id}/complete', 'patch', metadata);
    };
    /**
     * Pays off all remaining periods for a specific subscription.
     *
     * @summary Pay Off
     */
    SDK.prototype.pay_off_subscription = function (metadata) {
        return this.core.fetch('/v1/subscriptions/{id}/pay_off', 'patch', metadata);
    };
    /**
     * Preserves a specific subscription.
     *
     * @summary Preserve
     */
    SDK.prototype.preserve_subscription = function (metadata) {
        return this.core.fetch('/v1/subscriptions/{id}/preserve', 'patch', metadata);
    };
    /**
     * Restores a specific subscription.
     *
     * @summary Restore
     */
    SDK.prototype.restore_subscription = function (metadata) {
        return this.core.fetch('/v1/subscriptions/{id}/restore', 'patch', metadata);
    };
    SDK.prototype.upcoming_period_subscription = function (body, metadata) {
        return this.core.fetch('/v1/subscriptions/{id}/upcoming_period', 'patch', body, metadata);
    };
    /**
     * Returns a list of your swaps.
     *
     * @summary List
     */
    SDK.prototype.list_swap = function (metadata) {
        return this.core.fetch('/v1/swaps', 'get', metadata);
    };
    /**
     * Creates a new swap.
     *
     * @summary Create
     */
    SDK.prototype.create_swap = function (body) {
        return this.core.fetch('/v1/swaps', 'post', body);
    };
    /**
     * Retrieves details of a specific swap.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_swap = function (metadata) {
        return this.core.fetch('/v1/swaps/{id}', 'get', metadata);
    };
    SDK.prototype.update_swap = function (body, metadata) {
        return this.core.fetch('/v1/swaps/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific swap.
     *
     * @summary Delete
     */
    SDK.prototype.delete_swap = function (metadata) {
        return this.core.fetch('/v1/swaps/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your tax overrides.
     *
     * @summary List
     */
    SDK.prototype.list_tax_override = function (metadata) {
        return this.core.fetch('/v1/tax_overrides', 'get', metadata);
    };
    /**
     * Creates a new tax override.
     *
     * @summary Create
     */
    SDK.prototype.create_tax_override = function (body) {
        return this.core.fetch('/v1/tax_overrides', 'post', body);
    };
    /**
     * Retrieves details of a specific tax override.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_tax_override = function (metadata) {
        return this.core.fetch('/v1/tax_overrides/{id}', 'get', metadata);
    };
    SDK.prototype.update_tax_override = function (body, metadata) {
        return this.core.fetch('/v1/tax_overrides/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific tax override.
     *
     * @summary Delete
     */
    SDK.prototype.delete_tax_override = function (metadata) {
        return this.core.fetch('/v1/tax_overrides/{id}', 'delete', metadata);
    };
    /**
     * Retrieves details of the current account's tax protocol.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_tax_protocol = function () {
        return this.core.fetch('/v1/tax_protocol', 'get');
    };
    /**
     * Updates the current account's tax protocol.
     *
     * @summary Update
     */
    SDK.prototype.update_tax_protocol = function (body) {
        return this.core.fetch('/v1/tax_protocol', 'patch', body);
    };
    /**
     * Returns a list of your tax registrations.
     *
     * @summary List
     */
    SDK.prototype.list_tax_registration = function (metadata) {
        return this.core.fetch('/v1/tax_registrations', 'get', metadata);
    };
    /**
     * Creates a new tax registration.
     *
     * @summary Create
     */
    SDK.prototype.create_tax_registration = function (body) {
        return this.core.fetch('/v1/tax_registrations', 'post', body);
    };
    /**
     * Retrieves details of a specific tax registration.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_tax_registration = function (metadata) {
        return this.core.fetch('/v1/tax_registrations/{id}', 'get', metadata);
    };
    SDK.prototype.update_tax_registration = function (body, metadata) {
        return this.core.fetch('/v1/tax_registrations/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific tax registration.
     *
     * @summary Delete
     */
    SDK.prototype.delete_tax_registration = function (metadata) {
        return this.core.fetch('/v1/tax_registrations/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of all available tax zones.
     *
     * @summary List
     */
    SDK.prototype.list_tax_zone = function (metadata) {
        return this.core.fetch('/v1/tax_zones', 'get', metadata);
    };
    /**
     * Returns a list of your trackings.
     *
     * @summary List
     */
    SDK.prototype.list_tracking = function (metadata) {
        return this.core.fetch('/v1/trackings', 'get', metadata);
    };
    /**
     * Retrieves details of a specific tracking.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_tracking = function (metadata) {
        return this.core.fetch('/v1/trackings/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your upsell funnels.
     *
     * @summary List
     */
    SDK.prototype.list_upsell_funnel = function (metadata) {
        return this.core.fetch('/v1/upsell_funnels', 'get', metadata);
    };
    /**
     * Creates a new upsell funnel.
     *
     * @summary Create
     */
    SDK.prototype.create_upsell_funnel = function (body) {
        return this.core.fetch('/v1/upsell_funnels', 'post', body);
    };
    /**
     * Retrieves details of a specific upsell funnel.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_upsell_funnel = function (metadata) {
        return this.core.fetch('/v1/upsell_funnels/{id}', 'get', metadata);
    };
    SDK.prototype.update_upsell_funnel = function (body, metadata) {
        return this.core.fetch('/v1/upsell_funnels/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific upsell funnel.
     *
     * @summary Delete
     */
    SDK.prototype.delete_upsell_funnel = function (metadata) {
        return this.core.fetch('/v1/upsell_funnels/{id}', 'delete', metadata);
    };
    /**
     * Duplicates a specific upsell funnel.
     *
     * @summary Duplicate
     */
    SDK.prototype.duplicate_upsell_funnel = function (metadata) {
        return this.core.fetch('/v1/upsell_funnels/{id}/duplicate', 'post', metadata);
    };
    /**
     * Returns a list of your upsells.
     *
     * @summary List
     */
    SDK.prototype.list_upsell = function (metadata) {
        return this.core.fetch('/v1/upsells', 'get', metadata);
    };
    /**
     * Creates a new upsell.
     *
     * @summary Create
     */
    SDK.prototype.create_upsell = function (body) {
        return this.core.fetch('/v1/upsells', 'post', body);
    };
    /**
     * Retrieves details of a specific upsell.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_upsell = function (metadata) {
        return this.core.fetch('/v1/upsells/{id}', 'get', metadata);
    };
    SDK.prototype.update_upsell = function (body, metadata) {
        return this.core.fetch('/v1/upsells/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific upsell.
     *
     * @summary Delete
     */
    SDK.prototype.delete_upsell = function (metadata) {
        return this.core.fetch('/v1/upsells/{id}', 'delete', metadata);
    };
    /**
     * Returns a list of your variant options.
     *
     * @summary List
     */
    SDK.prototype.list_variant_option = function (metadata) {
        return this.core.fetch('/v1/variant_options', 'get', metadata);
    };
    /**
     * Retrieves details of a specific variant option.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_variant_option = function (metadata) {
        return this.core.fetch('/v1/variant_options/{id}', 'get', metadata);
    };
    /**
     * Returns a list of your variants.
     *
     * @summary List
     */
    SDK.prototype.list_variant = function (metadata) {
        return this.core.fetch('/v1/variants', 'get', metadata);
    };
    /**
     * Creates a new variant.
     *
     * @summary Create
     */
    SDK.prototype.create_variant = function (body) {
        return this.core.fetch('/v1/variants', 'post', body);
    };
    /**
     * Retrieves details of a specific variant.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_variant = function (metadata) {
        return this.core.fetch('/v1/variants/{id}', 'get', metadata);
    };
    SDK.prototype.update_variant = function (body, metadata) {
        return this.core.fetch('/v1/variants/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific variant.
     *
     * @summary Delete
     */
    SDK.prototype.delete_variant = function (metadata) {
        return this.core.fetch('/v1/variants/{id}', 'delete', metadata);
    };
    /**
     * Creates a new verification code.
     *
     * @summary Create
     */
    SDK.prototype.create_verification_code = function (body) {
        return this.core.fetch('/v1/verification_codes', 'post', body);
    };
    /**
     * Verifies a verification code.
     *
     * @summary Verify
     */
    SDK.prototype.verify_verification_code = function (body) {
        return this.core.fetch('/v1/verification_codes/verify', 'post', body);
    };
    /**
     * Returns a list of your webhook endpoints.
     *
     * @summary List
     */
    SDK.prototype.list_webhook_endpoint = function (metadata) {
        return this.core.fetch('/v1/webhook_endpoints', 'get', metadata);
    };
    /**
     * Creates a new webhook endpoint. If a webhook endpoint already exists with the same `url`
     * then it will be updated and returned.
     *
     * @summary Create
     */
    SDK.prototype.create_webhook_endpoint = function (body) {
        return this.core.fetch('/v1/webhook_endpoints', 'post', body);
    };
    /**
     * Retrieves details of a specific webhook endpoint.
     *
     * @summary Retrieve
     */
    SDK.prototype.retrieve_webhook_endpoint = function (metadata) {
        return this.core.fetch('/v1/webhook_endpoints/{id}', 'get', metadata);
    };
    SDK.prototype.update_webhook_endpoint = function (body, metadata) {
        return this.core.fetch('/v1/webhook_endpoints/{id}', 'patch', body, metadata);
    };
    /**
     * Deletes a specific webhook endpoint.
     *
     * @summary Delete
     */
    SDK.prototype.delete_webhook_endpoint = function (metadata) {
        return this.core.fetch('/v1/webhook_endpoints/{id}', 'delete', metadata);
    };
    /**
     * Sends a test webhook for the specific webhook endpoint.
     *
     * @summary Test
     */
    SDK.prototype.test_webhook_endpoint = function (metadata) {
        return this.core.fetch('/v1/webhook_endpoints/{id}/test', 'post', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
