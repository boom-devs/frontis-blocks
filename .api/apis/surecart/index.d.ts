import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Retrieves details of the current account's abandoned checkout protocol.
     *
     * @summary Retrieve
     */
    retrieve_abandoned_checkout_protocol(): Promise<FetchResponse<200, types.RetrieveAbandonedCheckoutProtocolResponse200>>;
    /**
     * Updates the current account's abandoned checkout protocol.
     *
     * @summary Update
     */
    update_abandoned_checkout_protocol(body?: types.UpdateAbandonedCheckoutProtocolBodyParam): Promise<FetchResponse<200, types.UpdateAbandonedCheckoutProtocolResponse200>>;
    /**
     * Returns a list of your abandonded checkouts.
     *
     * @summary List
     */
    list_abandonded_checkout(metadata?: types.ListAbandondedCheckoutMetadataParam): Promise<FetchResponse<200, types.ListAbandondedCheckoutResponse200>>;
    /**
     * Retrieves details of a specific abandonded checkout.
     *
     * @summary Retrieve
     */
    retrieve_abandonded_checkout(metadata: types.RetrieveAbandondedCheckoutMetadataParam): Promise<FetchResponse<200, types.RetrieveAbandondedCheckoutResponse200>>;
    /**
     * Updates a specific abandoned checkout.
     *
     * @summary Update
     */
    update_abandonded_checkout(body: types.UpdateAbandondedCheckoutBodyParam, metadata: types.UpdateAbandondedCheckoutMetadataParam): Promise<FetchResponse<200, types.UpdateAbandondedCheckoutResponse200>>;
    update_abandonded_checkout(metadata: types.UpdateAbandondedCheckoutMetadataParam): Promise<FetchResponse<200, types.UpdateAbandondedCheckoutResponse200>>;
    /**
     * Retrieves details of the current account.
     *
     * @summary Retrieve
     */
    retrieve_account(): Promise<FetchResponse<200, types.RetrieveAccountResponse200>>;
    /**
     * Updates the current account.
     *
     * @summary Update
     */
    update_account(body?: types.UpdateAccountBodyParam): Promise<FetchResponse<200, types.UpdateAccountResponse200>>;
    /**
     * Returns a list of your activations.
     *
     * @summary List
     */
    list_activation(metadata?: types.ListActivationMetadataParam): Promise<FetchResponse<200, types.ListActivationResponse200>>;
    /**
     * Creates a new activation.
     *
     * @summary Create
     */
    create_activation(body?: types.CreateActivationBodyParam): Promise<FetchResponse<200, types.CreateActivationResponse200>>;
    /**
     * Retrieves details of a specific activation.
     *
     * @summary Retrieve
     */
    retrieve_activation(metadata: types.RetrieveActivationMetadataParam): Promise<FetchResponse<200, types.RetrieveActivationResponse200>>;
    /**
     * Updates a specific activation.
     *
     * @summary Update
     */
    update_activation(body: types.UpdateActivationBodyParam, metadata: types.UpdateActivationMetadataParam): Promise<FetchResponse<200, types.UpdateActivationResponse200>>;
    update_activation(metadata: types.UpdateActivationMetadataParam): Promise<FetchResponse<200, types.UpdateActivationResponse200>>;
    /**
     * Deletes a specific activation.
     *
     * @summary Delete
     */
    delete_activation(metadata: types.DeleteActivationMetadataParam): Promise<FetchResponse<200, types.DeleteActivationResponse200>>;
    /**
     * Returns a list of your affiliation products.
     *
     * @summary List
     */
    list_affiliation_product(metadata?: types.ListAffiliationProductMetadataParam): Promise<FetchResponse<200, types.ListAffiliationProductResponse200>>;
    /**
     * Creates a new affiliation product.
     *
     * @summary Create
     */
    create_affiliation_product(body?: types.CreateAffiliationProductBodyParam): Promise<FetchResponse<200, types.CreateAffiliationProductResponse200>>;
    /**
     * Retrieves details of a specific a specific affiliation product.
     *
     * @summary Retrieve
     */
    retrieve_affiliation_product(metadata: types.RetrieveAffiliationProductMetadataParam): Promise<FetchResponse<200, types.RetrieveAffiliationProductResponse200>>;
    /**
     * updates specific affiliation product.
     *
     * @summary Update
     */
    update_affiliation_product(body: types.UpdateAffiliationProductBodyParam, metadata: types.UpdateAffiliationProductMetadataParam): Promise<FetchResponse<200, types.UpdateAffiliationProductResponse200>>;
    update_affiliation_product(metadata: types.UpdateAffiliationProductMetadataParam): Promise<FetchResponse<200, types.UpdateAffiliationProductResponse200>>;
    /**
     * Deletes a specific affiliation product.
     *
     * @summary Delete
     */
    delete_affiliation_product(metadata: types.DeleteAffiliationProductMetadataParam): Promise<FetchResponse<200, types.DeleteAffiliationProductResponse200>>;
    /**
     * Retrieves details of the current account's affiliation protocol.
     *
     * @summary Retrieve
     */
    retrieve_affiliation_protocol(): Promise<FetchResponse<200, types.RetrieveAffiliationProtocolResponse200>>;
    /**
     * Updates the current account's affiliation protocol.
     *
     * @summary Update
     */
    update_affiliation_protocol(body?: types.UpdateAffiliationProtocolBodyParam): Promise<FetchResponse<200, types.UpdateAffiliationProtocolResponse200>>;
    /**
     * Returns a list of your affiliation requests.
     *
     * @summary List
     */
    list_affiliation_request(metadata?: types.ListAffiliationRequestMetadataParam): Promise<FetchResponse<200, types.ListAffiliationRequestResponse200>>;
    /**
     * Creates a new affiliation request.
     *
     * @summary Create
     */
    create_affiliation_request(body?: types.CreateAffiliationRequestBodyParam): Promise<FetchResponse<200, types.CreateAffiliationRequestResponse200>>;
    /**
     * Retrieves details of a specific affiliation request.
     *
     * @summary Retrieve
     */
    retrieve_affiliation_request(metadata: types.RetrieveAffiliationRequestMetadataParam): Promise<FetchResponse<200, types.RetrieveAffiliationRequestResponse200>>;
    /**
     * Updates a specific affiliation request.
     *
     * @summary Update
     */
    update_affiliation_request(body: types.UpdateAffiliationRequestBodyParam, metadata: types.UpdateAffiliationRequestMetadataParam): Promise<FetchResponse<200, types.UpdateAffiliationRequestResponse200>>;
    update_affiliation_request(metadata: types.UpdateAffiliationRequestMetadataParam): Promise<FetchResponse<200, types.UpdateAffiliationRequestResponse200>>;
    /**
     * Deletes a specific affiliation request.
     *
     * @summary Delete
     */
    delete_affiliation_request(metadata: types.DeleteAffiliationRequestMetadataParam): Promise<FetchResponse<200, types.DeleteAffiliationRequestResponse200>>;
    /**
     * Returns a list of your affiliations.
     *
     * @summary List
     */
    list_affiliation(metadata?: types.ListAffiliationMetadataParam): Promise<FetchResponse<200, types.ListAffiliationResponse200>>;
    /**
     * Creates a new affiliation.
     *
     * @summary Create
     */
    create_affiliation(body?: types.CreateAffiliationBodyParam): Promise<FetchResponse<200, types.CreateAffiliationResponse200>>;
    /**
     * Retrieves details of a specific affiliation.
     *
     * @summary Retrieve
     */
    retrieve_affiliation(metadata: types.RetrieveAffiliationMetadataParam): Promise<FetchResponse<200, types.RetrieveAffiliationResponse200>>;
    /**
     * updates specific affiliation.
     *
     * @summary Update
     */
    update_affiliation(body: types.UpdateAffiliationBodyParam, metadata: types.UpdateAffiliationMetadataParam): Promise<FetchResponse<200, types.UpdateAffiliationResponse200>>;
    update_affiliation(metadata: types.UpdateAffiliationMetadataParam): Promise<FetchResponse<200, types.UpdateAffiliationResponse200>>;
    /**
     * Deletes a specific affiliation.
     *
     * @summary Delete
     */
    delete_affiliation(metadata: types.DeleteAffiliationMetadataParam): Promise<FetchResponse<200, types.DeleteAffiliationResponse200>>;
    /**
     * Activates a specific affiliation.
     *
     * @summary Activate
     */
    activate_affiliation(metadata: types.ActivateAffiliationMetadataParam): Promise<FetchResponse<200, types.ActivateAffiliationResponse200>>;
    /**
     * Deactivates a specific affiliation.
     *
     * @summary Deactivate
     */
    deactivate_affiliation(metadata: types.DeactivateAffiliationMetadataParam): Promise<FetchResponse<200, types.DeactivateAffiliationResponse200>>;
    /**
     * Returns a list of your auto fees.
     *
     * @summary List
     */
    list_auto_fee(metadata?: types.ListAutoFeeMetadataParam): Promise<FetchResponse<200, types.ListAutoFeeResponse200>>;
    /**
     * Creates a new auto fee.
     *
     * @summary Create
     */
    create_auto_fee(body?: types.CreateAutoFeeBodyParam): Promise<FetchResponse<200, types.CreateAutoFeeResponse200>>;
    /**
     * Retrieves details of a specific auto fee.
     *
     * @summary Retrieve
     */
    retrieve_auto_fee(metadata: types.RetrieveAutoFeeMetadataParam): Promise<FetchResponse<200, types.RetrieveAutoFeeResponse200>>;
    /**
     * Updates a specific auto fee.
     *
     * @summary Update
     */
    update_auto_fee(body: types.UpdateAutoFeeBodyParam, metadata: types.UpdateAutoFeeMetadataParam): Promise<FetchResponse<200, types.UpdateAutoFeeResponse200>>;
    update_auto_fee(metadata: types.UpdateAutoFeeMetadataParam): Promise<FetchResponse<200, types.UpdateAutoFeeResponse200>>;
    /**
     * Deletes a specific auto fee.
     *
     * @summary Delete
     */
    delete_auto_fee(metadata: types.DeleteAutoFeeMetadataParam): Promise<FetchResponse<200, types.DeleteAutoFeeResponse200>>;
    /**
     * Returns a list of your balance transactions.
     *
     * @summary List
     */
    list_balance_transaction(metadata?: types.ListBalanceTransactionMetadataParam): Promise<FetchResponse<200, types.ListBalanceTransactionResponse200>>;
    /**
     * Creates a new balance transaction.
     *
     * @summary Create
     */
    create_balance_transaction(body?: types.CreateBalanceTransactionBodyParam): Promise<FetchResponse<200, types.CreateBalanceTransactionResponse200>>;
    /**
     * Retrieves details of a specific balance transaction.
     *
     * @summary Retrieve
     */
    retrieve_balance_transaction(metadata: types.RetrieveBalanceTransactionMetadataParam): Promise<FetchResponse<200, types.RetrieveBalanceTransactionResponse200>>;
    /**
     * Returns a list of your balances.
     *
     * @summary List
     */
    list_balance(metadata?: types.ListBalanceMetadataParam): Promise<FetchResponse<200, types.ListBalanceResponse200>>;
    /**
     * Retrieves details of the current account's brand.
     *
     * @summary Retrieve
     */
    retrieve_brand(): Promise<FetchResponse<200, types.RetrieveBrandResponse200>>;
    /**
     * Updates the current account's brand.
     *
     * @summary Update
     */
    update_brand(body?: types.UpdateBrandBodyParam): Promise<FetchResponse<200, types.UpdateBrandResponse200>>;
    /**
     * Returns a list of your bulk actions.
     *
     * @summary List
     */
    list_bulk_action(metadata?: types.ListBulkActionMetadataParam): Promise<FetchResponse<200, types.ListBulkActionResponse200>>;
    /**
     * Creates a new bulk action.
     *
     * @summary Create
     */
    create_bulk_action(body?: types.CreateBulkActionBodyParam): Promise<FetchResponse<200, types.CreateBulkActionResponse200>>;
    /**
     * Retrieves details of a specific bulk action.
     *
     * @summary Retrieve
     */
    retrieve_bulk_action(metadata: types.RetrieveBulkActionMetadataParam): Promise<FetchResponse<200, types.RetrieveBulkActionResponse200>>;
    /**
     * Returns a list of your bumps.
     *
     * @summary List
     */
    list_bump(metadata?: types.ListBumpMetadataParam): Promise<FetchResponse<200, types.ListBumpResponse200>>;
    /**
     * Creates a new bump.
     *
     * @summary Create
     */
    create_bump(body?: types.CreateBumpBodyParam): Promise<FetchResponse<200, types.CreateBumpResponse200>>;
    /**
     * Retrieves details of a specific bump.
     *
     * @summary Retrieve
     */
    retrieve_bump(metadata: types.RetrieveBumpMetadataParam): Promise<FetchResponse<200, types.RetrieveBumpResponse200>>;
    /**
     * Updates a specific bump.
     *
     * @summary Update
     */
    update_bump(body: types.UpdateBumpBodyParam, metadata: types.UpdateBumpMetadataParam): Promise<FetchResponse<200, types.UpdateBumpResponse200>>;
    update_bump(metadata: types.UpdateBumpMetadataParam): Promise<FetchResponse<200, types.UpdateBumpResponse200>>;
    /**
     * Deletes a specific bump.
     *
     * @summary Delete
     */
    delete_bump(metadata: types.DeleteBumpMetadataParam): Promise<FetchResponse<200, types.DeleteBumpResponse200>>;
    /**
     * Duplicates a specific order bump.
     *
     * @summary Duplicate
     */
    duplicate_bump(metadata: types.DuplicateBumpMetadataParam): Promise<FetchResponse<200, types.DuplicateBumpResponse200>>;
    /**
     * Returns a list of your cancellation acts.
     *
     * @summary List
     */
    list_cancellation_act(metadata?: types.ListCancellationActMetadataParam): Promise<FetchResponse<200, types.ListCancellationActResponse200>>;
    /**
     * Retrieves details of a specific cancellation reason.
     *
     * @summary Retrieve
     */
    retrieve_cancellation_act(metadata: types.RetrieveCancellationActMetadataParam): Promise<FetchResponse<200, types.RetrieveCancellationActResponse200>>;
    /**
     * Returns a list of your cancellation reasons.
     *
     * @summary List
     */
    list_cancellation_reason(metadata?: types.ListCancellationReasonMetadataParam): Promise<FetchResponse<200, types.ListCancellationReasonResponse200>>;
    /**
     * Creates a new cancellation reason.
     *
     * @summary Create
     */
    create_cancellation_reason(body?: types.CreateCancellationReasonBodyParam): Promise<FetchResponse<200, types.CreateCancellationReasonResponse200>>;
    /**
     * Retrieves details of a specific cancellation reason.
     *
     * @summary Retrieve
     */
    retrieve_cancellation_reason(metadata: types.RetrieveCancellationReasonMetadataParam): Promise<FetchResponse<200, types.RetrieveCancellationReasonResponse200>>;
    /**
     * Updates a specific cancellation reason.
     *
     * @summary Update
     */
    update_cancellation_reason(body: types.UpdateCancellationReasonBodyParam, metadata: types.UpdateCancellationReasonMetadataParam): Promise<FetchResponse<200, types.UpdateCancellationReasonResponse200>>;
    update_cancellation_reason(metadata: types.UpdateCancellationReasonMetadataParam): Promise<FetchResponse<200, types.UpdateCancellationReasonResponse200>>;
    /**
     * Deletes a specific cancellation reason.
     *
     * @summary Delete
     */
    delete_cancellation_reason(metadata: types.DeleteCancellationReasonMetadataParam): Promise<FetchResponse<200, types.DeleteCancellationReasonResponse200>>;
    /**
     * Returns a list of your charges.
     *
     * @summary List
     */
    list_charge(metadata?: types.ListChargeMetadataParam): Promise<FetchResponse<200, types.ListChargeResponse200>>;
    /**
     * Retrieves details of a specific charge.
     *
     * @summary Retrieve
     */
    retrieve_charge(metadata: types.RetrieveChargeMetadataParam): Promise<FetchResponse<200, types.RetrieveChargeResponse200>>;
    /**
     * Retrieves details of the current account's checkout portal protocol.
     *
     * @summary Retrieve
     */
    retrieve_checkout_portal_protocol(): Promise<FetchResponse<200, types.RetrieveCheckoutPortalProtocolResponse200>>;
    /**
     * Updates the current account's checkout portal protocol.
     *
     * @summary Update
     */
    update_checkout_portal_protocol(body?: types.UpdateCheckoutPortalProtocolBodyParam): Promise<FetchResponse<200, types.UpdateCheckoutPortalProtocolResponse200>>;
    /**
     * Returns a list of your checkouts.
     *
     * @summary List
     */
    list_checkout(metadata?: types.ListCheckoutMetadataParam): Promise<FetchResponse<200, types.ListCheckoutResponse200>>;
    /**
     * Creates a new checkout.
     *
     * @summary Create
     */
    create_checkout(body?: types.CreateCheckoutBodyParam): Promise<FetchResponse<200, types.CreateCheckoutResponse200>>;
    /**
     * Retrieves details of a specific checkout.
     *
     * @summary Retrieve
     */
    retrieve_checkout(metadata: types.RetrieveCheckoutMetadataParam): Promise<FetchResponse<200, types.RetrieveCheckoutResponse200>>;
    /**
     * Updates a specific checkout.
     *
     * @summary Update
     */
    update_checkout(body: types.UpdateCheckoutBodyParam, metadata: types.UpdateCheckoutMetadataParam): Promise<FetchResponse<200, types.UpdateCheckoutResponse200>>;
    update_checkout(metadata: types.UpdateCheckoutMetadataParam): Promise<FetchResponse<200, types.UpdateCheckoutResponse200>>;
    /**
     * Finalizes a specific checkout before it can be paid. If succesfull, this will return an
     * associated `PaymentIntent` with the necessary information to capture the payment via the
     * specific processor.
     *
     * @summary Finalize
     */
    finalize_checkout(metadata: types.FinalizeCheckoutMetadataParam): Promise<FetchResponse<200, types.FinalizeCheckoutResponse200>>;
    /**
     * Manually marks a checkout as paid. This can only be performed on checkouts that have
     * been finalized. When a checkout is paid associated purchases and subscriptions will be
     * created.
     *
     * @summary Manually Pay
     */
    manually_pay_checkout(metadata: types.ManuallyPayCheckoutMetadataParam): Promise<FetchResponse<200, types.ManuallyPayCheckoutResponse200>>;
    /**
     * Cancels a specific checkout. This action can only be performed on checkouts that are
     * `paid` or `processing`. When a checkout is canceled associated purchases will be revoked
     * and subscriptions will be canceled.
     *
     * @summary Cancel
     */
    cancel_checkout(metadata: types.CancelCheckoutMetadataParam): Promise<FetchResponse<200, types.CancelCheckoutResponse200>>;
    /**
     * Records an offer for the specific bump – used for bump analytics.
     *
     * @summary Offer Bump
     */
    offer_bump_checkout(metadata: types.OfferBumpCheckoutMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Records an offer for the specific upsell – used for upsell analytics.
     *
     * @summary Offer Upsell
     */
    offer_upsell_checkout(metadata: types.OfferUpsellCheckoutMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Records a decline for the specific upsell – used for upsell analytics and to traverse
     * through an upsell funnel by refreshing the `current_upsell`.
     *
     * @summary Decline Upsell
     */
    decline_upsell_checkout(metadata: types.DeclineUpsellCheckoutMetadataParam): Promise<FetchResponse<200, types.DeclineUpsellCheckoutResponse200>>;
    /**
     * Returns a list of your clicks.
     *
     * @summary List
     */
    list_click(metadata?: types.ListClickMetadataParam): Promise<FetchResponse<200, types.ListClickResponse200>>;
    /**
     * Retrieves details of a specific click.
     *
     * @summary Retrieve
     */
    retrieve_click(metadata: types.RetrieveClickMetadataParam): Promise<FetchResponse<200, types.RetrieveClickResponse200>>;
    /**
     * Returns a list of your coupons.
     *
     * @summary List
     */
    list_coupon(metadata?: types.ListCouponMetadataParam): Promise<FetchResponse<200, types.ListCouponResponse200>>;
    /**
     * Creates a new coupon.
     *
     * @summary Create
     */
    create_coupon(body?: types.CreateCouponBodyParam): Promise<FetchResponse<200, types.CreateCouponResponse200>>;
    /**
     * Retrieves details of a specific coupon.
     *
     * @summary Retrieve
     */
    retrieve_coupon(metadata: types.RetrieveCouponMetadataParam): Promise<FetchResponse<200, types.RetrieveCouponResponse200>>;
    /**
     * Updates a specific coupon.
     *
     * @summary Update
     */
    update_coupon(body: types.UpdateCouponBodyParam, metadata: types.UpdateCouponMetadataParam): Promise<FetchResponse<200, types.UpdateCouponResponse200>>;
    update_coupon(metadata: types.UpdateCouponMetadataParam): Promise<FetchResponse<200, types.UpdateCouponResponse200>>;
    /**
     * Deletes a specific coupon.
     *
     * @summary Delete
     */
    delete_coupon(metadata: types.DeleteCouponMetadataParam): Promise<FetchResponse<200, types.DeleteCouponResponse200>>;
    /**
     * Duplicates a specific coupon.
     *
     * @summary Duplicate
     */
    duplicate_coupon(metadata: types.DuplicateCouponMetadataParam): Promise<FetchResponse<200, types.DuplicateCouponResponse200>>;
    /**
     * Retrieves details of the current account's customer notification protocol.
     *
     * @summary Retrieve
     */
    retrieve_customer_notification_protocol(): Promise<FetchResponse<200, types.RetrieveCustomerNotificationProtocolResponse200>>;
    /**
     * Updates the current account's customer notification protocol.
     *
     * @summary Update
     */
    update_customer_notification_protocol(body?: types.UpdateCustomerNotificationProtocolBodyParam): Promise<FetchResponse<200, types.UpdateCustomerNotificationProtocolResponse200>>;
    /**
     * Retrieves details of the current account's customer portal protocol.
     *
     * @summary Retrieve
     */
    retrieve_customer_portal_protocol(): Promise<FetchResponse<200, types.RetrieveCustomerPortalProtocolResponse200>>;
    /**
     * Updates the current account's customer portal protocol.
     *
     * @summary Update
     */
    update_customer_portal_protocol(body?: types.UpdateCustomerPortalProtocolBodyParam): Promise<FetchResponse<200, types.UpdateCustomerPortalProtocolResponse200>>;
    /**
     * Returns a list of your customers.
     *
     * @summary List
     */
    list_customer(metadata?: types.ListCustomerMetadataParam): Promise<FetchResponse<200, types.ListCustomerResponse200>>;
    /**
     * Creates a new customer.
     *
     * @summary Create
     */
    create_customer(body?: types.CreateCustomerBodyParam): Promise<FetchResponse<200, types.CreateCustomerResponse200>>;
    /**
     * Retrieves details of a specific customer.
     *
     * @summary Retrieve
     */
    retrieve_customer(metadata: types.RetrieveCustomerMetadataParam): Promise<FetchResponse<200, types.RetrieveCustomerResponse200>>;
    /**
     * Updates a specific customer.
     *
     * @summary Update
     */
    update_customer(body: types.UpdateCustomerBodyParam, metadata: types.UpdateCustomerMetadataParam): Promise<FetchResponse<200, types.UpdateCustomerResponse200>>;
    update_customer(metadata: types.UpdateCustomerMetadataParam): Promise<FetchResponse<200, types.UpdateCustomerResponse200>>;
    /**
     * Deletes a specific customer.
     *
     * @summary Delete
     */
    delete_customer(metadata: types.DeleteCustomerMetadataParam): Promise<FetchResponse<200, types.DeleteCustomerResponse200>>;
    /**
     * Exposes a specific media that the customer has access to via a purchase.
     *
     * @summary Expose Media
     */
    expose_media_customer(metadata: types.ExposeMediaCustomerMetadataParam): Promise<FetchResponse<200, types.ExposeMediaCustomerResponse200>>;
    /**
     * Returns a list of discounts (only redeemed discounts).
     *
     * @summary List Discounts
     */
    list_discounts_discount(metadata?: types.ListDiscountsDiscountMetadataParam): Promise<FetchResponse<200, types.ListDiscountsDiscountResponse200>>;
    /**
     * Retrieves details of a specific discount (only redeemed discounts).
     *
     * @summary Retrieve Discount
     */
    retrieve_discount_discount(metadata: types.RetrieveDiscountDiscountMetadataParam): Promise<FetchResponse<200, types.RetrieveDiscountDiscountResponse200>>;
    /**
     * Returns a list of your display currencies.
     *
     * @summary List
     */
    list_display_currency(): Promise<FetchResponse<200, types.ListDisplayCurrencyResponse200>>;
    /**
     * Creates a new display currency.
     *
     * @summary Create
     */
    create_display_currency(body?: types.CreateDisplayCurrencyBodyParam): Promise<FetchResponse<200, types.CreateDisplayCurrencyResponse200>>;
    /**
     * Retrieves details of a specific display currency.
     *
     * @summary Retrieve
     */
    retrieve_display_currency(metadata: types.RetrieveDisplayCurrencyMetadataParam): Promise<FetchResponse<200, types.RetrieveDisplayCurrencyResponse200>>;
    /**
     * Deletes a specific display currency.
     *
     * @summary Delete
     */
    delete_display_currency(metadata: types.DeleteDisplayCurrencyMetadataParam): Promise<FetchResponse<200, types.DeleteDisplayCurrencyResponse200>>;
    /**
     * Returns a list of your disputes.
     *
     * @summary List
     */
    list_dispute(metadata?: types.ListDisputeMetadataParam): Promise<FetchResponse<200, types.ListDisputeResponse200>>;
    /**
     * Retrieves details of a specific dispute.
     *
     * @summary Retrieve
     */
    retrieve_dispute(metadata: types.RetrieveDisputeMetadataParam): Promise<FetchResponse<200, types.RetrieveDisputeResponse200>>;
    /**
     * Returns a list of your downloads.
     *
     * @summary List
     */
    list_download(metadata?: types.ListDownloadMetadataParam): Promise<FetchResponse<200, types.ListDownloadResponse200>>;
    /**
     * Creates a new download.
     *
     * @summary Create
     */
    create_download(body?: types.CreateDownloadBodyParam): Promise<FetchResponse<200, types.CreateDownloadResponse200>>;
    /**
     * Retrieves details of a specific download.
     *
     * @summary Retrieve
     */
    retrieve_download(metadata: types.RetrieveDownloadMetadataParam): Promise<FetchResponse<200, types.RetrieveDownloadResponse200>>;
    /**
     * Updates a specific download.
     *
     * @summary Update
     */
    update_download(body: types.UpdateDownloadBodyParam, metadata: types.UpdateDownloadMetadataParam): Promise<FetchResponse<200, types.UpdateDownloadResponse200>>;
    update_download(metadata: types.UpdateDownloadMetadataParam): Promise<FetchResponse<200, types.UpdateDownloadResponse200>>;
    /**
     * Deletes a specific download.
     *
     * @summary Delete
     */
    delete_download(metadata: types.DeleteDownloadMetadataParam): Promise<FetchResponse<200, types.DeleteDownloadResponse200>>;
    /**
     * Returns a list of your events.
     *
     * @summary List
     */
    list_event(metadata?: types.ListEventMetadataParam): Promise<FetchResponse<200, types.ListEventResponse200>>;
    /**
     * Retrieves details of a specific event.
     *
     * @summary Retrieve
     */
    retrieve_event(metadata: types.RetrieveEventMetadataParam): Promise<FetchResponse<200, types.RetrieveEventResponse200>>;
    /**
     * Returns a list of your exports.
     *
     * @summary List
     */
    list_export(metadata?: types.ListExportMetadataParam): Promise<FetchResponse<200, types.ListExportResponse200>>;
    /**
     * Creates a new export.
     *
     * @summary Create
     */
    create_export(body?: types.CreateExportBodyParam): Promise<FetchResponse<200, types.CreateExportResponse200>>;
    /**
     * Retrieves details of a specific export.
     *
     * @summary Retrieve
     */
    retrieve_export(metadata: types.RetrieveExportMetadataParam): Promise<FetchResponse<200, types.RetrieveExportResponse200>>;
    /**
     * Returns a list of your fees.
     *
     * @summary List
     */
    list_fee(metadata?: types.ListFeeMetadataParam): Promise<FetchResponse<200, types.ListFeeResponse200>>;
    /**
     * Creates a new fee.
     *
     * @summary Create
     */
    create_fee(body?: types.CreateFeeBodyParam): Promise<FetchResponse<200, types.CreateFeeResponse200>>;
    /**
     * Retrieves details of a specific fee.
     *
     * @summary Retrieve
     */
    retrieve_fee(metadata: types.RetrieveFeeMetadataParam): Promise<FetchResponse<200, types.RetrieveFeeResponse200>>;
    /**
     * Updates a specific fee.
     *
     * @summary Update
     */
    update_fee(body: types.UpdateFeeBodyParam, metadata: types.UpdateFeeMetadataParam): Promise<FetchResponse<200, types.UpdateFeeResponse200>>;
    update_fee(metadata: types.UpdateFeeMetadataParam): Promise<FetchResponse<200, types.UpdateFeeResponse200>>;
    /**
     * Deletes a specific fee.
     *
     * @summary Delete
     */
    delete_fee(metadata: types.DeleteFeeMetadataParam): Promise<FetchResponse<200, types.DeleteFeeResponse200>>;
    /**
     * Returns a list of your fulfillment items.
     *
     * @summary List
     */
    list_fulfillment_item(metadata?: types.ListFulfillmentItemMetadataParam): Promise<FetchResponse<200, types.ListFulfillmentItemResponse200>>;
    /**
     * Retrieves details of a specific fulfillment item.
     *
     * @summary Retrieve
     */
    retrieve_fulfillment_item(metadata: types.RetrieveFulfillmentItemMetadataParam): Promise<FetchResponse<200, types.RetrieveFulfillmentItemResponse200>>;
    /**
     * Returns a list of your fulfillments.
     *
     * @summary List
     */
    list_fulfillment(metadata?: types.ListFulfillmentMetadataParam): Promise<FetchResponse<200, types.ListFulfillmentResponse200>>;
    /**
     * Creates a new fulfillment.
     *
     * @summary Create
     */
    create_fulfillment(body?: types.CreateFulfillmentBodyParam): Promise<FetchResponse<200, types.CreateFulfillmentResponse200>>;
    /**
     * Retrieves details of a specific fulfillment.
     *
     * @summary Retrieve
     */
    retrieve_fulfillment(metadata: types.RetrieveFulfillmentMetadataParam): Promise<FetchResponse<200, types.RetrieveFulfillmentResponse200>>;
    /**
     * Updates a specific fulfillment.
     *
     * @summary Update
     */
    update_fulfillment(body: types.UpdateFulfillmentBodyParam, metadata: types.UpdateFulfillmentMetadataParam): Promise<FetchResponse<200, types.UpdateFulfillmentResponse200>>;
    update_fulfillment(metadata: types.UpdateFulfillmentMetadataParam): Promise<FetchResponse<200, types.UpdateFulfillmentResponse200>>;
    /**
     * Deletes a specific fulfillment.
     *
     * @summary Delete
     */
    delete_fulfillment(metadata: types.DeleteFulfillmentMetadataParam): Promise<FetchResponse<200, types.DeleteFulfillmentResponse200>>;
    /**
     * Returns a list of your imports.
     *
     * @summary List
     */
    list_import(metadata?: types.ListImportMetadataParam): Promise<FetchResponse<200, types.ListImportResponse200>>;
    /**
     * Retrieves details of a specific import.
     *
     * @summary Retrieve
     */
    retrieve_import(metadata: types.RetrieveImportMetadataParam): Promise<FetchResponse<200, types.RetrieveImportResponse200>>;
    /**
     * Returns a list of your invoices.
     *
     * @summary List
     */
    list_invoice(metadata?: types.ListInvoiceMetadataParam): Promise<FetchResponse<200, types.ListInvoiceResponse200>>;
    /**
     * Creates a new invoice.
     *
     * @summary Create
     */
    create_invoice(body?: types.CreateInvoiceBodyParam): Promise<FetchResponse<200, types.CreateInvoiceResponse200>>;
    /**
     * Retrieves details of a specific invoice.
     *
     * @summary Retrieve
     */
    retrieve_invoice(metadata: types.RetrieveInvoiceMetadataParam): Promise<FetchResponse<200, types.RetrieveInvoiceResponse200>>;
    /**
     * Updates a specific invoice.
     *
     * @summary Update
     */
    update_invoice(body: types.UpdateInvoiceBodyParam, metadata: types.UpdateInvoiceMetadataParam): Promise<FetchResponse<200, types.UpdateInvoiceResponse200>>;
    update_invoice(metadata: types.UpdateInvoiceMetadataParam): Promise<FetchResponse<200, types.UpdateInvoiceResponse200>>;
    /**
     * Deletes a specific invoice.
     *
     * @summary Delete
     */
    delete_invoice(metadata: types.DeleteInvoiceMetadataParam): Promise<FetchResponse<200, types.DeleteInvoiceResponse200>>;
    /**
     * Revert an open invoice back to draft.
     *
     * @summary Make Draft
     */
    make_draft_invoice(metadata: types.MakeDraftInvoiceMetadataParam): Promise<FetchResponse<200, types.MakeDraftInvoiceResponse200>>;
    /**
     * Open an invoice to send it to the customer or collect payment immediately.
     *
     * @summary Open
     */
    open_invoice(metadata: types.OpenInvoiceMetadataParam): Promise<FetchResponse<200, types.OpenInvoiceResponse200>>;
    /**
     * Resend invoice to the customer.
     *
     * @summary Resend Notification
     */
    resend_notification_invoice(metadata: types.ResendNotificationInvoiceMetadataParam): Promise<FetchResponse<200, types.ResendNotificationInvoiceResponse200>>;
    /**
     * Returns a list of your licenses.
     *
     * @summary List
     */
    list_license(metadata?: types.ListLicenseMetadataParam): Promise<FetchResponse<200, types.ListLicenseResponse200>>;
    /**
     * Creates a new license.
     *
     * @summary Create
     */
    create_license(body?: types.CreateLicenseBodyParam): Promise<FetchResponse<200, types.CreateLicenseResponse200>>;
    /**
     * Retrieves details of a specific license.
     *
     * @summary Retrieve
     */
    retrieve_license(metadata: types.RetrieveLicenseMetadataParam): Promise<FetchResponse<200, types.RetrieveLicenseResponse200>>;
    /**
     * Updates a specific license.
     *
     * @summary Update
     */
    update_license(body: types.UpdateLicenseBodyParam, metadata: types.UpdateLicenseMetadataParam): Promise<FetchResponse<200, types.UpdateLicenseResponse200>>;
    update_license(metadata: types.UpdateLicenseMetadataParam): Promise<FetchResponse<200, types.UpdateLicenseResponse200>>;
    /**
     * Deletes a specific license.
     *
     * @summary Delete
     */
    delete_license(metadata: types.DeleteLicenseMetadataParam): Promise<FetchResponse<200, types.DeleteLicenseResponse200>>;
    /**
     * Returns a list of your line_items.
     *
     * @summary List
     */
    list_line_item(metadata?: types.ListLineItemMetadataParam): Promise<FetchResponse<200, types.ListLineItemResponse200>>;
    /**
     * Creates a new line item.
     *
     * @summary Create
     */
    create_line_item(body?: types.CreateLineItemBodyParam, metadata?: types.CreateLineItemMetadataParam): Promise<FetchResponse<200, types.CreateLineItemResponse200>>;
    /**
     * Retrieves details of a specific line item.
     *
     * @summary Retrieve
     */
    retrieve_line_item(metadata: types.RetrieveLineItemMetadataParam): Promise<FetchResponse<200, types.RetrieveLineItemResponse200>>;
    /**
     * Updates a specific line item.
     *
     * @summary Update
     */
    update_line_item(body: types.UpdateLineItemBodyParam, metadata: types.UpdateLineItemMetadataParam): Promise<FetchResponse<200, types.UpdateLineItemResponse200>>;
    update_line_item(metadata: types.UpdateLineItemMetadataParam): Promise<FetchResponse<200, types.UpdateLineItemResponse200>>;
    /**
     * Deletes a specific line item.
     *
     * @summary Delete
     */
    delete_line_item(metadata: types.DeleteLineItemMetadataParam): Promise<FetchResponse<200, types.DeleteLineItemResponse200>>;
    /**
     * Creates a new line item as an upsell. An attempt to pay the upsell will be made using
     * the payment method on the checkout.
     *
     * @summary Upsell
     */
    upsell_line_item(body?: types.UpsellLineItemBodyParam, metadata?: types.UpsellLineItemMetadataParam): Promise<FetchResponse<200, types.UpsellLineItemResponse200>>;
    /**
     * Performs a swap on the line item for the specific swap price.
     *
     * @summary Swap
     */
    swap_line_item(metadata: types.SwapLineItemMetadataParam): Promise<FetchResponse<200, types.SwapLineItemResponse200>>;
    /**
     * Reverses the swap on the line item for the original price.
     *
     * @summary Unswap
     */
    unswap_line_item(metadata: types.UnswapLineItemMetadataParam): Promise<FetchResponse<200, types.UnswapLineItemResponse200>>;
    /**
     * Records an offer for the specific swap – used for swap analytics.
     *
     * @summary Offer Swap
     */
    offer_swap_line_item(metadata: types.OfferSwapLineItemMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns a list of your manual charges.
     *
     * @summary List
     */
    list_manual_charge(metadata?: types.ListManualChargeMetadataParam): Promise<FetchResponse<200, types.ListManualChargeResponse200>>;
    /**
     * Retrieves details of a specific manual charge.
     *
     * @summary Retrieve
     */
    retrieve_manual_charge(metadata: types.RetrieveManualChargeMetadataParam): Promise<FetchResponse<200, types.RetrieveManualChargeResponse200>>;
    /**
     * Returns a list of your manual payment methods.
     *
     * @summary List
     */
    list_manual_payment_method(metadata?: types.ListManualPaymentMethodMetadataParam): Promise<FetchResponse<200, types.ListManualPaymentMethodResponse200>>;
    /**
     * Creates a new manual_payment_method.
     *
     * @summary Create
     */
    create_manual_payment_method(body?: types.CreateManualPaymentMethodBodyParam): Promise<FetchResponse<200, types.CreateManualPaymentMethodResponse200>>;
    /**
     * Retrieves details of a specific manual payment method.
     *
     * @summary Retrieve
     */
    retrieve_manual_payment_method(metadata: types.RetrieveManualPaymentMethodMetadataParam): Promise<FetchResponse<200, types.RetrieveManualPaymentMethodResponse200>>;
    /**
     * Updates a specific manual payment method.
     *
     * @summary Update
     */
    update_manual_payment_method(body: types.UpdateManualPaymentMethodBodyParam, metadata: types.UpdateManualPaymentMethodMetadataParam): Promise<FetchResponse<200, types.UpdateManualPaymentMethodResponse200>>;
    update_manual_payment_method(metadata: types.UpdateManualPaymentMethodMetadataParam): Promise<FetchResponse<200, types.UpdateManualPaymentMethodResponse200>>;
    /**
     * Deletes a specific manual payment method.
     *
     * @summary Delete
     */
    delete_manual_payment_method(metadata: types.DeleteManualPaymentMethodMetadataParam): Promise<FetchResponse<200, types.DeleteManualPaymentMethodResponse200>>;
    /**
     * Returns a list of your medias.
     *
     * @summary List
     */
    list_media(metadata?: types.ListMediaMetadataParam): Promise<FetchResponse<200, types.ListMediaResponse200>>;
    /**
     * Creates a new media.
     *
     * @summary Create
     */
    create_media(body?: types.CreateMediaBodyParam): Promise<FetchResponse<200, types.CreateMediaResponse200>>;
    /**
     * Retrieves details of a specific media.
     *
     * @summary Retrieve
     */
    retrieve_media(metadata: types.RetrieveMediaMetadataParam): Promise<FetchResponse<200, types.RetrieveMediaResponse200>>;
    /**
     * Updates a specific media.
     *
     * @summary Update
     */
    update_media(body: types.UpdateMediaBodyParam, metadata: types.UpdateMediaMetadataParam): Promise<FetchResponse<200, types.UpdateMediaResponse200>>;
    update_media(metadata: types.UpdateMediaMetadataParam): Promise<FetchResponse<200, types.UpdateMediaResponse200>>;
    /**
     * Deletes a specific media.
     *
     * @summary Delete
     */
    delete_media(metadata: types.DeleteMediaMetadataParam): Promise<FetchResponse<200, types.DeleteMediaResponse200>>;
    /**
     * Returns a list of your notes.
     *
     * @summary List
     */
    list_note(metadata?: types.ListNoteMetadataParam): Promise<FetchResponse<200, types.ListNoteResponse200>>;
    /**
     * Creates a new note.
     *
     * @summary Create
     */
    create_note(body?: types.CreateNoteBodyParam): Promise<FetchResponse<200, types.CreateNoteResponse200>>;
    /**
     * Retrieves details of a specific note.
     *
     * @summary Retrieve
     */
    retrieve_note(metadata: types.RetrieveNoteMetadataParam): Promise<FetchResponse<200, types.RetrieveNoteResponse200>>;
    /**
     * Updates a specific note.
     *
     * @summary Update
     */
    update_note(body: types.UpdateNoteBodyParam, metadata: types.UpdateNoteMetadataParam): Promise<FetchResponse<200, types.UpdateNoteResponse200>>;
    update_note(metadata: types.UpdateNoteMetadataParam): Promise<FetchResponse<200, types.UpdateNoteResponse200>>;
    /**
     * Deletes a specific note.
     *
     * @summary Delete
     */
    delete_note(metadata: types.DeleteNoteMetadataParam): Promise<FetchResponse<200, types.DeleteNoteResponse200>>;
    /**
     * Retrieves details of the current account's order protocol.
     *
     * @summary Retrieve
     */
    retrieve_order_protocol(): Promise<FetchResponse<200, types.RetrieveOrderProtocolResponse200>>;
    /**
     * Updates the current account's order protocol.
     *
     * @summary Update
     */
    update_order_protocol(body?: types.UpdateOrderProtocolBodyParam): Promise<FetchResponse<200, types.UpdateOrderProtocolResponse200>>;
    /**
     * Returns a list of your orders.
     *
     * @summary List
     */
    list_order(metadata?: types.ListOrderMetadataParam): Promise<FetchResponse<200, types.ListOrderResponse200>>;
    /**
     * Retrieves details of a specific order.
     *
     * @summary Retrieve
     */
    retrieve_order(metadata: types.RetrieveOrderMetadataParam): Promise<FetchResponse<200, types.RetrieveOrderResponse200>>;
    /**
     * Resend order confirmation or subscription renewal email to the customer.
     *
     * @summary Resend Notification
     */
    resend_notification_order(metadata: types.ResendNotificationOrderMetadataParam): Promise<FetchResponse<200, types.ResendNotificationOrderResponse200>>;
    /**
     * Returns a list of your payment failures.
     *
     * @summary List
     */
    list_payment_failure(metadata?: types.ListPaymentFailureMetadataParam): Promise<FetchResponse<200, types.ListPaymentFailureResponse200>>;
    /**
     * Returns a list of your payment intents.
     *
     * @summary List
     */
    list_payment_intent(metadata?: types.ListPaymentIntentMetadataParam): Promise<FetchResponse<200, types.ListPaymentIntentResponse200>>;
    /**
     * Creates a new payment intent.
     *
     * @summary Create
     */
    create_payment_intent(body?: types.CreatePaymentIntentBodyParam): Promise<FetchResponse<200, types.CreatePaymentIntentResponse200>>;
    /**
     * Retrieves details of a specific payment intent.
     *
     * @summary Retrieve
     */
    retrieve_payment_intent(metadata: types.RetrievePaymentIntentMetadataParam): Promise<FetchResponse<200, types.RetrievePaymentIntentResponse200>>;
    /**
     * Capture a specific payment intent.
     *
     * @summary Capture
     */
    capture_payment_intent(metadata: types.CapturePaymentIntentMetadataParam): Promise<FetchResponse<200, types.CapturePaymentIntentResponse200>>;
    /**
     * Returns a list of your payment methods.
     *
     * @summary List
     */
    list_payment_method(metadata?: types.ListPaymentMethodMetadataParam): Promise<FetchResponse<200, types.ListPaymentMethodResponse200>>;
    /**
     * Retrieves details of a specific payment method.
     *
     * @summary Retrieve
     */
    retrieve_payment_method(metadata: types.RetrievePaymentMethodMetadataParam): Promise<FetchResponse<200, types.RetrievePaymentMethodResponse200>>;
    /**
     * Detaches a payment method from the associated customer.
     *
     * @summary Detach
     */
    detach_payment_method(metadata: types.DetachPaymentMethodMetadataParam): Promise<FetchResponse<200, types.DetachPaymentMethodResponse200>>;
    /**
     * Returns a list of your payout groups.
     *
     * @summary List
     */
    list_payout_group(metadata?: types.ListPayoutGroupMetadataParam): Promise<FetchResponse<200, types.ListPayoutGroupResponse200>>;
    /**
     * Creates a new payout group.
     *
     * @summary Create
     */
    create_payout_group(body?: types.CreatePayoutGroupBodyParam): Promise<FetchResponse<200, types.CreatePayoutGroupResponse200>>;
    /**
     * Retrieves details of a specific payout group.
     *
     * @summary Retrieve
     */
    retrieve_payout_group(metadata: types.RetrievePayoutGroupMetadataParam): Promise<FetchResponse<200, types.RetrievePayoutGroupResponse200>>;
    /**
     * Returns a list of your payouts.
     *
     * @summary List
     */
    list_payout(metadata?: types.ListPayoutMetadataParam): Promise<FetchResponse<200, types.ListPayoutResponse200>>;
    /**
     * Creates a new payout.
     *
     * @summary Create
     */
    create_payout(body?: types.CreatePayoutBodyParam): Promise<FetchResponse<200, types.CreatePayoutResponse200>>;
    /**
     * Retrieves details of a specific payout.
     *
     * @summary Retrieve
     */
    retrieve_payout(metadata: types.RetrievePayoutMetadataParam): Promise<FetchResponse<200, types.RetrievePayoutResponse200>>;
    /**
     * Deletes a specific payout.
     *
     * @summary Delete
     */
    delete_payout(metadata: types.DeletePayoutMetadataParam): Promise<FetchResponse<200, types.DeletePayoutResponse200>>;
    /**
     * Completes a specific payout.
     *
     * @summary Complete
     */
    complete_payout(metadata: types.CompletePayoutMetadataParam): Promise<FetchResponse<200, types.CompletePayoutResponse200>>;
    /**
     * Makes a specific payout processing.
     *
     * @summary Make Processing
     */
    make_processing_payout(metadata: types.MakeProcessingPayoutMetadataParam): Promise<FetchResponse<200, types.MakeProcessingPayoutResponse200>>;
    /**
     * Returns a list of periods.
     *
     * @summary List
     */
    list_period(metadata?: types.ListPeriodMetadataParam): Promise<FetchResponse<200, types.ListPeriodResponse200>>;
    /**
     * Updates a specific period.
     *
     * @summary Update
     */
    update_period(body: types.UpdatePeriodBodyParam, metadata: types.UpdatePeriodMetadataParam): Promise<FetchResponse<200, types.UpdatePeriodResponse200>>;
    update_period(metadata: types.UpdatePeriodMetadataParam): Promise<FetchResponse<200, types.UpdatePeriodResponse200>>;
    /**
     * Retries payment for a specific period.
     *
     * @summary Retry Payment
     */
    retry_payment_period(metadata: types.RetryPaymentPeriodMetadataParam): Promise<FetchResponse<200, types.RetryPaymentPeriodResponse200>>;
    /**
     * Returns a list of your prices.
     *
     * @summary List
     */
    list_price(metadata?: types.ListPriceMetadataParam): Promise<FetchResponse<200, types.ListPriceResponse200>>;
    /**
     * Creates a new price.
     *
     * @summary Create
     */
    create_price(body?: types.CreatePriceBodyParam): Promise<FetchResponse<200, types.CreatePriceResponse200>>;
    /**
     * Retrieves details of a specific price.
     *
     * @summary Retrieve
     */
    retrieve_price(metadata: types.RetrievePriceMetadataParam): Promise<FetchResponse<200, types.RetrievePriceResponse200>>;
    /**
     * Updates a specific price.
     *
     * @summary Update
     */
    update_price(body: types.UpdatePriceBodyParam, metadata: types.UpdatePriceMetadataParam): Promise<FetchResponse<200, types.UpdatePriceResponse200>>;
    update_price(metadata: types.UpdatePriceMetadataParam): Promise<FetchResponse<200, types.UpdatePriceResponse200>>;
    /**
     * Deletes a specific price.
     *
     * @summary Delete
     */
    delete_price(metadata: types.DeletePriceMetadataParam): Promise<FetchResponse<200, types.DeletePriceResponse200>>;
    /**
     * Duplicates a specific price.
     *
     * @summary Duplicate
     */
    duplicate_price(metadata: types.DuplicatePriceMetadataParam): Promise<FetchResponse<200, types.DuplicatePriceResponse200>>;
    /**
     * Returns a list of your processors.
     *
     * @summary List
     */
    list_processor(metadata?: types.ListProcessorMetadataParam): Promise<FetchResponse<200, types.ListProcessorResponse200>>;
    /**
     * Retrieves details of a specific processor.
     *
     * @summary Retrieve
     */
    retrieve_processor(metadata: types.RetrieveProcessorMetadataParam): Promise<FetchResponse<200, types.RetrieveProcessorResponse200>>;
    /**
     * Retrieves a list of available payment method types for this specific processor and the
     * given parameters (amount, country, etc.). This endpoint is only available for `mollie`
     * processors.
     *
     * @summary Payment Method Types
     */
    payment_method_types_processor(metadata: types.PaymentMethodTypesProcessorMetadataParam): Promise<FetchResponse<200, types.PaymentMethodTypesProcessorResponse200>>;
    /**
     * Returns a list of your product collections
     *
     * @summary List
     */
    list_product_collection(metadata?: types.ListProductCollectionMetadataParam): Promise<FetchResponse<200, types.ListProductCollectionResponse200>>;
    /**
     * Creates a new product collection.
     *
     * @summary Create
     */
    create_product_collection(body?: types.CreateProductCollectionBodyParam): Promise<FetchResponse<200, types.CreateProductCollectionResponse200>>;
    /**
     * Retrieves details of a specific product collection. The `{id}` section of the endpoint
     * accepts the product collection ID or slug.
     *
     * @summary Retrieve
     */
    retrieve_product_collection(metadata: types.RetrieveProductCollectionMetadataParam): Promise<FetchResponse<200, types.RetrieveProductCollectionResponse200>>;
    /**
     * Updates a specific product collection
     *
     * @summary Update
     */
    update_product_collection(body: types.UpdateProductCollectionBodyParam, metadata: types.UpdateProductCollectionMetadataParam): Promise<FetchResponse<200, types.UpdateProductCollectionResponse200>>;
    update_product_collection(metadata: types.UpdateProductCollectionMetadataParam): Promise<FetchResponse<200, types.UpdateProductCollectionResponse200>>;
    /**
     * Deletes a specific product collection.
     *
     * @summary Delete
     */
    delete_product_collection(metadata: types.DeleteProductCollectionMetadataParam): Promise<FetchResponse<200, types.DeleteProductCollectionResponse200>>;
    /**
     * Returns a list of your product groups.
     *
     * @summary List
     */
    list_product_group(metadata?: types.ListProductGroupMetadataParam): Promise<FetchResponse<200, types.ListProductGroupResponse200>>;
    /**
     * Creates a new product group.
     *
     * @summary Create
     */
    create_product_group(body?: types.CreateProductGroupBodyParam): Promise<FetchResponse<200, types.CreateProductGroupResponse200>>;
    /**
     * Retrieves details of a specific product group.
     *
     * @summary Retrieve
     */
    retrieve_product_group(metadata: types.RetrieveProductGroupMetadataParam): Promise<FetchResponse<200, types.RetrieveProductGroupResponse200>>;
    /**
     * Updates a specific product group.
     *
     * @summary Update
     */
    update_product_group(body: types.UpdateProductGroupBodyParam, metadata: types.UpdateProductGroupMetadataParam): Promise<FetchResponse<200, types.UpdateProductGroupResponse200>>;
    update_product_group(metadata: types.UpdateProductGroupMetadataParam): Promise<FetchResponse<200, types.UpdateProductGroupResponse200>>;
    /**
     * Deletes a specific product group.
     *
     * @summary Delete
     */
    delete_product_group(metadata: types.DeleteProductGroupMetadataParam): Promise<FetchResponse<200, types.DeleteProductGroupResponse200>>;
    /**
     * Returns a list of your product medias.
     *
     * @summary List
     */
    list_product_media(metadata?: types.ListProductMediaMetadataParam): Promise<FetchResponse<200, types.ListProductMediaResponse200>>;
    /**
     * Create a new product media.
     *
     * @summary Create
     */
    create_product_media(body?: types.CreateProductMediaBodyParam): Promise<FetchResponse<200, types.CreateProductMediaResponse200>>;
    /**
     * Retrieves details of a specific product media.
     *
     * @summary Retrieve
     */
    retrieve_product_media(metadata: types.RetrieveProductMediaMetadataParam): Promise<FetchResponse<200, types.RetrieveProductMediaResponse200>>;
    /**
     * Updates a specific product media.
     *
     * @summary Update
     */
    update_product_media(body: types.UpdateProductMediaBodyParam, metadata: types.UpdateProductMediaMetadataParam): Promise<FetchResponse<200, types.UpdateProductMediaResponse200>>;
    update_product_media(metadata: types.UpdateProductMediaMetadataParam): Promise<FetchResponse<200, types.UpdateProductMediaResponse200>>;
    /**
     * Deletes a specific product media.
     *
     * @summary Delete
     */
    delete_product_media(metadata: types.DeleteProductMediaMetadataParam): Promise<FetchResponse<200, types.DeleteProductMediaResponse200>>;
    /**
     * Returns a list of your products.
     *
     * @summary List
     */
    list_product(metadata?: types.ListProductMetadataParam): Promise<FetchResponse<200, types.ListProductResponse200>>;
    /**
     * Creates a new product.
     *
     * @summary Create
     */
    create_product(body?: types.CreateProductBodyParam): Promise<FetchResponse<200, types.CreateProductResponse200>>;
    /**
     * Retrieves details of a specific product. The `{id}` section of this endpoint accepts the
     * product ID or slug.
     *
     * @summary Retrieve
     */
    retrieve_product(metadata: types.RetrieveProductMetadataParam): Promise<FetchResponse<200, types.RetrieveProductResponse200>>;
    /**
     * Updates a specific product.
     *
     * @summary Update
     */
    update_product(body: types.UpdateProductBodyParam, metadata: types.UpdateProductMetadataParam): Promise<FetchResponse<200, types.UpdateProductResponse200>>;
    update_product(metadata: types.UpdateProductMetadataParam): Promise<FetchResponse<200, types.UpdateProductResponse200>>;
    /**
     * Deletes a specific product.
     *
     * @summary Delete
     */
    delete_product(metadata: types.DeleteProductMetadataParam): Promise<FetchResponse<200, types.DeleteProductResponse200>>;
    /**
     * Duplicates a specific product.
     *
     * @summary Duplicate
     */
    duplicate_product(metadata: types.DuplicateProductMetadataParam): Promise<FetchResponse<200, types.DuplicateProductResponse200>>;
    /**
     * Returns a list of your promotions.
     *
     * @summary List
     */
    list_promotion(metadata?: types.ListPromotionMetadataParam): Promise<FetchResponse<200, types.ListPromotionResponse200>>;
    /**
     * Creates a new promotion.
     *
     * @summary Create
     */
    create_promotion(body?: types.CreatePromotionBodyParam): Promise<FetchResponse<200, types.CreatePromotionResponse200>>;
    /**
     * Retrieves details of a specific promotion.
     *
     * @summary Retrieve
     */
    retrieve_promotion(metadata: types.RetrievePromotionMetadataParam): Promise<FetchResponse<200, types.RetrievePromotionResponse200>>;
    /**
     * Updates a specific promotion.
     *
     * @summary Update
     */
    update_promotion(body: types.UpdatePromotionBodyParam, metadata: types.UpdatePromotionMetadataParam): Promise<FetchResponse<200, types.UpdatePromotionResponse200>>;
    update_promotion(metadata: types.UpdatePromotionMetadataParam): Promise<FetchResponse<200, types.UpdatePromotionResponse200>>;
    /**
     * Deletes a specific promotion.
     *
     * @summary Delete
     */
    delete_promotion(metadata: types.DeletePromotionMetadataParam): Promise<FetchResponse<200, types.DeletePromotionResponse200>>;
    /**
     * Creates a new activation. If an activation already exists with the same `fingerprint`
     * then it will be updated and returned.
     *
     * @summary Create (Public)
     */
    createPublic_activation(body?: types.CreatePublicActivationBodyParam): Promise<FetchResponse<200, types.CreatePublicActivationResponse200>>;
    /**
     * Retrieves details of a specific activation.
     *
     * @summary Retrieve (Public)
     */
    retrievePublic_activation(metadata: types.RetrievePublicActivationMetadataParam): Promise<FetchResponse<200, types.RetrievePublicActivationResponse200>>;
    /**
     * Updates a specific activation.
     *
     * @summary Update (Public)
     */
    updatePublic_activation(body: types.UpdatePublicActivationBodyParam, metadata: types.UpdatePublicActivationMetadataParam): Promise<FetchResponse<200, types.UpdatePublicActivationResponse200>>;
    updatePublic_activation(metadata: types.UpdatePublicActivationMetadataParam): Promise<FetchResponse<200, types.UpdatePublicActivationResponse200>>;
    /**
     * Deletes a specific activation.
     *
     * @summary Delete (Public)
     */
    deletePublic_activation(metadata: types.DeletePublicActivationMetadataParam): Promise<FetchResponse<200, types.DeletePublicActivationResponse200>>;
    /**
     * Retrieves details of a specific checkout.
     *
     * @summary Retrieve (Public)
     */
    retrievePublic_checkout(metadata: types.RetrievePublicCheckoutMetadataParam): Promise<FetchResponse<200, types.RetrievePublicCheckoutResponse200>>;
    /**
     * Creates a new click.
     *
     * @summary Create (Public)
     */
    createPublic_click(body?: types.CreatePublicClickBodyParam): Promise<FetchResponse<200, types.CreatePublicClickResponse200>>;
    /**
     * Retrieves a license by it's key.
     *
     * @summary Retrieve (Public)
     */
    retrievePublic_license(metadata: types.RetrievePublicLicenseMetadataParam): Promise<FetchResponse<200, types.RetrievePublicLicenseResponse200>>;
    /**
     * Exposes the current release media for the license.
     *
     * @summary Expose Current Release (Public)
     */
    expose_current_releasePublic_license(metadata: types.ExposeCurrentReleasePublicLicenseMetadataParam): Promise<FetchResponse<200, types.ExposeCurrentReleasePublicLicenseResponse200>>;
    /**
     * Returns a list of purchases.
     *
     * @summary List
     */
    list_purchase(metadata?: types.ListPurchaseMetadataParam): Promise<FetchResponse<200, types.ListPurchaseResponse200>>;
    /**
     * Creates a new purchase.
     *
     * @summary Create
     */
    create_purchase(body?: types.CreatePurchaseBodyParam): Promise<FetchResponse<200, types.CreatePurchaseResponse200>>;
    /**
     * Retrieves details of a specific purchase.
     *
     * @summary Retrieve
     */
    retrieve_purchase(metadata: types.RetrievePurchaseMetadataParam): Promise<FetchResponse<200, types.RetrievePurchaseResponse200>>;
    /**
     * Updates a specific purchase.
     *
     * @summary Update
     */
    update_purchase(body: types.UpdatePurchaseBodyParam, metadata: types.UpdatePurchaseMetadataParam): Promise<FetchResponse<200, types.UpdatePurchaseResponse200>>;
    update_purchase(metadata: types.UpdatePurchaseMetadataParam): Promise<FetchResponse<200, types.UpdatePurchaseResponse200>>;
    /**
     * Invokes a specific purchase.
     *
     * @summary Invoke
     */
    invoke_purchase(metadata: types.InvokePurchaseMetadataParam): Promise<FetchResponse<200, types.InvokePurchaseResponse200>>;
    /**
     * Revokes a specific purchase.
     *
     * @summary Revoke
     */
    revoke_purchase(metadata: types.RevokePurchaseMetadataParam): Promise<FetchResponse<200, types.RevokePurchaseResponse200>>;
    /**
     * Returns a list of your referral items.
     *
     * @summary List
     */
    list_referral_item(metadata?: types.ListReferralItemMetadataParam): Promise<FetchResponse<200, types.ListReferralItemResponse200>>;
    /**
     * Retrieves details of a specific referral item.
     *
     * @summary Retrieve
     */
    retrieve_referral_item(metadata: types.RetrieveReferralItemMetadataParam): Promise<FetchResponse<200, types.RetrieveReferralItemResponse200>>;
    /**
     * Returns a list of your referrals.
     *
     * @summary List
     */
    list_referral(metadata?: types.ListReferralMetadataParam): Promise<FetchResponse<200, types.ListReferralResponse200>>;
    /**
     * Creates a new referral.
     *
     * @summary Create
     */
    create_referral(body?: types.CreateReferralBodyParam): Promise<FetchResponse<200, types.CreateReferralResponse200>>;
    /**
     * Retrieves details of a specific referral.
     *
     * @summary Retrieve
     */
    retrieve_referral(metadata: types.RetrieveReferralMetadataParam): Promise<FetchResponse<200, types.RetrieveReferralResponse200>>;
    /**
     * Updates a specific referral.
     *
     * @summary Update
     */
    update_referral(body: types.UpdateReferralBodyParam, metadata: types.UpdateReferralMetadataParam): Promise<FetchResponse<200, types.UpdateReferralResponse200>>;
    update_referral(metadata: types.UpdateReferralMetadataParam): Promise<FetchResponse<200, types.UpdateReferralResponse200>>;
    /**
     * Deletes a specific referral.
     *
     * @summary Delete
     */
    delete_referral(metadata: types.DeleteReferralMetadataParam): Promise<FetchResponse<200, types.DeleteReferralResponse200>>;
    /**
     * Approves a specific referral.
     *
     * @summary Approve
     */
    approve_referral(metadata: types.ApproveReferralMetadataParam): Promise<FetchResponse<200, types.ApproveReferralResponse200>>;
    /**
     * Denies a specific referral.
     *
     * @summary Deny
     */
    deny_referral(metadata: types.DenyReferralMetadataParam): Promise<FetchResponse<200, types.DenyReferralResponse200>>;
    /**
     * Makes a specific referral reveiwing.
     *
     * @summary Make Reviewing
     */
    make_reviewing_referral(metadata: types.MakeReviewingReferralMetadataParam): Promise<FetchResponse<200, types.MakeReviewingReferralResponse200>>;
    /**
     * Returns a list of your refund items.
     *
     * @summary List
     */
    list_refund_item(metadata?: types.ListRefundItemMetadataParam): Promise<FetchResponse<200, types.ListRefundItemResponse200>>;
    /**
     * Retrieves details of a specific refund item.
     *
     * @summary Retrieve
     */
    retrieve_refund_item(metadata: types.RetrieveRefundItemMetadataParam): Promise<FetchResponse<200, types.RetrieveRefundItemResponse200>>;
    /**
     * Returns a list of your refunds.
     *
     * @summary List
     */
    list_refund(metadata?: types.ListRefundMetadataParam): Promise<FetchResponse<200, types.ListRefundResponse200>>;
    /**
     * Creates a new refund.
     *
     * @summary Create
     */
    create_refund(body?: types.CreateRefundBodyParam, metadata?: types.CreateRefundMetadataParam): Promise<FetchResponse<200, types.CreateRefundResponse200>>;
    /**
     * Retrieves details of a specific refund.
     *
     * @summary Retrieve
     */
    retrieve_refund(metadata: types.RetrieveRefundMetadataParam): Promise<FetchResponse<200, types.RetrieveRefundResponse200>>;
    /**
     * Returns a list of your return items.
     *
     * @summary List
     */
    list_return_item(metadata?: types.ListReturnItemMetadataParam): Promise<FetchResponse<200, types.ListReturnItemResponse200>>;
    /**
     * Retrieves details of a specific return item.
     *
     * @summary Retrieve
     */
    retrieve_return_item(metadata: types.RetrieveReturnItemMetadataParam): Promise<FetchResponse<200, types.RetrieveReturnItemResponse200>>;
    /**
     * Returns a list of your return requests.
     *
     * @summary List
     */
    list_return_request(metadata?: types.ListReturnRequestMetadataParam): Promise<FetchResponse<200, types.ListReturnRequestResponse200>>;
    /**
     * Creates a new return request.
     *
     * @summary Create
     */
    create_return_request(body?: types.CreateReturnRequestBodyParam): Promise<FetchResponse<200, types.CreateReturnRequestResponse200>>;
    /**
     * Retrieves details of a specific return request.
     *
     * @summary Retrieve
     */
    retrieve_return_request(metadata: types.RetrieveReturnRequestMetadataParam): Promise<FetchResponse<200, types.RetrieveReturnRequestResponse200>>;
    /**
     * Updates a specific return request.
     *
     * @summary Update
     */
    update_return_request(body: types.UpdateReturnRequestBodyParam, metadata: types.UpdateReturnRequestMetadataParam): Promise<FetchResponse<200, types.UpdateReturnRequestResponse200>>;
    update_return_request(metadata: types.UpdateReturnRequestMetadataParam): Promise<FetchResponse<200, types.UpdateReturnRequestResponse200>>;
    /**
     * Deletes a specific return request.
     *
     * @summary Delete
     */
    delete_return_request(metadata: types.DeleteReturnRequestMetadataParam): Promise<FetchResponse<200, types.DeleteReturnRequestResponse200>>;
    /**
     * Updates status of a specific return request to `open`.
     *
     * @summary Open
     */
    open_return_request(metadata: types.OpenReturnRequestMetadataParam): Promise<FetchResponse<200, types.OpenReturnRequestResponse200>>;
    /**
     * Updates status of a specific return request to `complete`.
     *
     * @summary Complete
     */
    complete_return_request(metadata: types.CompleteReturnRequestMetadataParam): Promise<FetchResponse<200, types.CompleteReturnRequestResponse200>>;
    /**
     * Returns a list of possible return reasons.
     *
     * @summary List Return Reasons
     */
    list_return_reasons_return_request(): Promise<FetchResponse<200, types.ListReturnReasonsReturnRequestResponse200>>;
    /**
     * Returns a list of your review medias.
     *
     * @summary List
     */
    list_review_media(metadata?: types.ListReviewMediaMetadataParam): Promise<FetchResponse<200, types.ListReviewMediaResponse200>>;
    /**
     * Create a new review media.
     *
     * @summary Create
     */
    create_review_media(body?: types.CreateReviewMediaBodyParam): Promise<FetchResponse<200, types.CreateReviewMediaResponse200>>;
    /**
     * Retrieves details of a specific review media.
     *
     * @summary Retrieve
     */
    retrieve_review_media(metadata: types.RetrieveReviewMediaMetadataParam): Promise<FetchResponse<200, types.RetrieveReviewMediaResponse200>>;
    /**
     * Deletes a specific review media.
     *
     * @summary Delete
     */
    delete_review_media(metadata: types.DeleteReviewMediaMetadataParam): Promise<FetchResponse<200, types.DeleteReviewMediaResponse200>>;
    /**
     * Retrieves details of the current account's review protocol.
     *
     * @summary Retrieve
     */
    retrieve_review_protocol(): Promise<FetchResponse<200, types.RetrieveReviewProtocolResponse200>>;
    /**
     * Updates the current account's review protocol.
     *
     * @summary Update
     */
    update_review_protocol(body?: types.UpdateReviewProtocolBodyParam): Promise<FetchResponse<200, types.UpdateReviewProtocolResponse200>>;
    /**
     * Returns a list of your reviews.
     *
     * @summary List
     */
    list_review(metadata?: types.ListReviewMetadataParam): Promise<FetchResponse<200, types.ListReviewResponse200>>;
    /**
     * Creates a new review.
     *
     * @summary Create
     */
    create_review(body?: types.CreateReviewBodyParam): Promise<FetchResponse<200, types.CreateReviewResponse200>>;
    /**
     * Retrieves details of a specific review.
     *
     * @summary Retrieve
     */
    retrieve_review(metadata: types.RetrieveReviewMetadataParam): Promise<FetchResponse<200, types.RetrieveReviewResponse200>>;
    /**
     * Updates a specific review.
     *
     * @summary Update
     */
    update_review(body: types.UpdateReviewBodyParam, metadata: types.UpdateReviewMetadataParam): Promise<FetchResponse<200, types.UpdateReviewResponse200>>;
    update_review(metadata: types.UpdateReviewMetadataParam): Promise<FetchResponse<200, types.UpdateReviewResponse200>>;
    /**
     * Deletes a specific review.
     *
     * @summary Delete
     */
    delete_review(metadata: types.DeleteReviewMetadataParam): Promise<FetchResponse<200, types.DeleteReviewResponse200>>;
    /**
     * Publishes a specific review.
     *
     * @summary Publish
     */
    publish_review(metadata: types.PublishReviewMetadataParam): Promise<FetchResponse<200, types.PublishReviewResponse200>>;
    /**
     * Unpublishes a specific review.
     *
     * @summary Unpublish
     */
    unpublish_review(metadata: types.UnpublishReviewMetadataParam): Promise<FetchResponse<200, types.UnpublishReviewResponse200>>;
    /**
     * Constructs a rule string from structured data.
     *
     * @summary Construct rule string
     */
    constructrulestring_rule_string(body?: types.ConstructrulestringRuleStringBodyParam): Promise<FetchResponse<200, types.ConstructrulestringRuleStringResponse200>>;
    /**
     * Deconstructs a rule string into structured data.
     *
     * @summary Deconstruct rule string
     */
    deconstructrulestring_rule_string(body?: types.DeconstructrulestringRuleStringBodyParam): Promise<FetchResponse<200, types.DeconstructrulestringRuleStringResponse200>>;
    /**
     * Retrieves the schema definition for a rule schema.
     *
     * @summary Retrieve schema definition
     */
    retrieveschemadefinition_rule_string(metadata: types.RetrieveschemadefinitionRuleStringMetadataParam): Promise<FetchResponse<200, types.RetrieveschemadefinitionRuleStringResponse200>>;
    /**
     * Returns a list of your shipping methods.
     *
     * @summary List
     */
    list_shipping_method(): Promise<FetchResponse<200, types.ListShippingMethodResponse200>>;
    /**
     * Creates a new shipping method.
     *
     * @summary Create
     */
    create_shipping_method(body?: types.CreateShippingMethodBodyParam): Promise<FetchResponse<200, types.CreateShippingMethodResponse200>>;
    /**
     * Retrieves details of a specific shipping method.
     *
     * @summary Retrieve
     */
    retrieve_shipping_method(metadata: types.RetrieveShippingMethodMetadataParam): Promise<FetchResponse<200, types.RetrieveShippingMethodResponse200>>;
    /**
     * Updates a specific shipping method.
     *
     * @summary Update
     */
    update_shipping_method(body: types.UpdateShippingMethodBodyParam, metadata: types.UpdateShippingMethodMetadataParam): Promise<FetchResponse<200, types.UpdateShippingMethodResponse200>>;
    update_shipping_method(metadata: types.UpdateShippingMethodMetadataParam): Promise<FetchResponse<200, types.UpdateShippingMethodResponse200>>;
    /**
     * Returns a list of your shipping profiles.
     *
     * @summary List
     */
    list_shipping_profile(): Promise<FetchResponse<200, types.ListShippingProfileResponse200>>;
    /**
     * Creates a new shipping profile.
     *
     * @summary Create
     */
    create_shipping_profile(body?: types.CreateShippingProfileBodyParam): Promise<FetchResponse<200, types.CreateShippingProfileResponse200>>;
    /**
     * Retrieves details of a specific shipping profile.
     *
     * @summary Retrieve
     */
    retrieve_shipping_profile(metadata: types.RetrieveShippingProfileMetadataParam): Promise<FetchResponse<200, types.RetrieveShippingProfileResponse200>>;
    /**
     * Updates a specific shipping profile.
     *
     * @summary Update
     */
    update_shipping_profile(body: types.UpdateShippingProfileBodyParam, metadata: types.UpdateShippingProfileMetadataParam): Promise<FetchResponse<200, types.UpdateShippingProfileResponse200>>;
    update_shipping_profile(metadata: types.UpdateShippingProfileMetadataParam): Promise<FetchResponse<200, types.UpdateShippingProfileResponse200>>;
    /**
     * Deletes a specific shipping profile.
     *
     * @summary Delete
     */
    delete_shipping_profile(metadata: types.DeleteShippingProfileMetadataParam): Promise<FetchResponse<200, types.DeleteShippingProfileResponse200>>;
    /**
     * Retrieves details of the current account's shipping protocol.
     *
     * @summary Retrieve
     */
    retrieve_shipping_protocol(): Promise<FetchResponse<200, types.RetrieveShippingProtocolResponse200>>;
    /**
     * Updates the current account's shipping protocol.
     *
     * @summary Update
     */
    update_shipping_protocol(body?: types.UpdateShippingProtocolBodyParam): Promise<FetchResponse<200, types.UpdateShippingProtocolResponse200>>;
    /**
     * Returns a list of your shipping rates.
     *
     * @summary List
     */
    list_shipping_rate(metadata?: types.ListShippingRateMetadataParam): Promise<FetchResponse<200, types.ListShippingRateResponse200>>;
    /**
     * Creates a new shipping rate.
     *
     * @summary Create
     */
    create_shipping_rate(body?: types.CreateShippingRateBodyParam): Promise<FetchResponse<200, types.CreateShippingRateResponse200>>;
    /**
     * Retrieves details of a specific shipping rate.
     *
     * @summary Retrieve
     */
    retrieve_shipping_rate(metadata: types.RetrieveShippingRateMetadataParam): Promise<FetchResponse<200, types.RetrieveShippingRateResponse200>>;
    /**
     * Updates a specific shipping rate.
     *
     * @summary Update
     */
    update_shipping_rate(body: types.UpdateShippingRateBodyParam, metadata: types.UpdateShippingRateMetadataParam): Promise<FetchResponse<200, types.UpdateShippingRateResponse200>>;
    update_shipping_rate(metadata: types.UpdateShippingRateMetadataParam): Promise<FetchResponse<200, types.UpdateShippingRateResponse200>>;
    /**
     * Deletes a specific shipping rate.
     *
     * @summary Delete
     */
    delete_shipping_rate(metadata: types.DeleteShippingRateMetadataParam): Promise<FetchResponse<200, types.DeleteShippingRateResponse200>>;
    /**
     * Returns a list of your shipping zones.
     *
     * @summary List
     */
    list_shipping_zone(metadata?: types.ListShippingZoneMetadataParam): Promise<FetchResponse<200, types.ListShippingZoneResponse200>>;
    /**
     * Creates a new shipping zone.
     *
     * @summary Create
     */
    create_shipping_zone(body?: types.CreateShippingZoneBodyParam): Promise<FetchResponse<200, types.CreateShippingZoneResponse200>>;
    /**
     * Retrieves details of a specific shipping zone.
     *
     * @summary Retrieve
     */
    retrieve_shipping_zone(metadata: types.RetrieveShippingZoneMetadataParam): Promise<FetchResponse<200, types.RetrieveShippingZoneResponse200>>;
    /**
     * Updates a specific shipping zone.
     *
     * @summary Update
     */
    update_shipping_zone(body: types.UpdateShippingZoneBodyParam, metadata: types.UpdateShippingZoneMetadataParam): Promise<FetchResponse<200, types.UpdateShippingZoneResponse200>>;
    update_shipping_zone(metadata: types.UpdateShippingZoneMetadataParam): Promise<FetchResponse<200, types.UpdateShippingZoneResponse200>>;
    /**
     * Deletes a specific shipping zone.
     *
     * @summary Delete
     */
    delete_shipping_zone(metadata: types.DeleteShippingZoneMetadataParam): Promise<FetchResponse<200, types.DeleteShippingZoneResponse200>>;
    /**
     * Returns order statistics.
     *
     * @summary Orders
     */
    orders_statistic(metadata: types.OrdersStatisticMetadataParam): Promise<FetchResponse<200, types.OrdersStatisticResponse200>>;
    /**
     * Retrieves details of the current account's subscription protocol.
     *
     * @summary Retrieve
     */
    retrieve_subscription_protocol(): Promise<FetchResponse<200, types.RetrieveSubscriptionProtocolResponse200>>;
    /**
     * Updates the current account's subscription protocol.
     *
     * @summary Update
     */
    update_subscription_protocol(body?: types.UpdateSubscriptionProtocolBodyParam): Promise<FetchResponse<200, types.UpdateSubscriptionProtocolResponse200>>;
    /**
     * Returns a list of your subscriptions.
     *
     * @summary List
     */
    list_subscription(metadata?: types.ListSubscriptionMetadataParam): Promise<FetchResponse<200, types.ListSubscriptionResponse200>>;
    /**
     * Creates a new subscription.
     *
     * @summary Create
     */
    create_subscription(body?: types.CreateSubscriptionBodyParam): Promise<FetchResponse<200, types.CreateSubscriptionResponse200>>;
    /**
     * Retrieves details of a specific subscription.
     *
     * @summary Retrieve
     */
    retrieve_subscription(metadata: types.RetrieveSubscriptionMetadataParam): Promise<FetchResponse<200, types.RetrieveSubscriptionResponse200>>;
    /**
     * Updates a specific subscription.
     *
     * @summary Update
     */
    update_subscription(body: types.UpdateSubscriptionBodyParam, metadata: types.UpdateSubscriptionMetadataParam): Promise<FetchResponse<200, types.UpdateSubscriptionResponse200>>;
    update_subscription(metadata: types.UpdateSubscriptionMetadataParam): Promise<FetchResponse<200, types.UpdateSubscriptionResponse200>>;
    /**
     * Cancels a specific subscription. If a `restore_at` value is provided, the subscription
     * will be effectively "paused" until that date when it will automatically renew.
     *
     * @summary Cancel/Pause
     */
    cancelPause_subscription(body: types.CancelPauseSubscriptionBodyParam, metadata: types.CancelPauseSubscriptionMetadataParam): Promise<FetchResponse<200, types.CancelPauseSubscriptionResponse200>>;
    cancelPause_subscription(metadata: types.CancelPauseSubscriptionMetadataParam): Promise<FetchResponse<200, types.CancelPauseSubscriptionResponse200>>;
    /**
     * Completes a specific subscription.
     *
     * @summary Complete
     */
    complete_subscription(metadata: types.CompleteSubscriptionMetadataParam): Promise<FetchResponse<200, types.CompleteSubscriptionResponse200>>;
    /**
     * Pays off all remaining periods for a specific subscription.
     *
     * @summary Pay Off
     */
    pay_off_subscription(metadata: types.PayOffSubscriptionMetadataParam): Promise<FetchResponse<200, types.PayOffSubscriptionResponse200>>;
    /**
     * Preserves a specific subscription.
     *
     * @summary Preserve
     */
    preserve_subscription(metadata: types.PreserveSubscriptionMetadataParam): Promise<FetchResponse<200, types.PreserveSubscriptionResponse200>>;
    /**
     * Restores a specific subscription.
     *
     * @summary Restore
     */
    restore_subscription(metadata: types.RestoreSubscriptionMetadataParam): Promise<FetchResponse<200, types.RestoreSubscriptionResponse200>>;
    /**
     * Generates a preview of the upcoming period.
     *
     * @summary Upcoming Period
     */
    upcoming_period_subscription(body: types.UpcomingPeriodSubscriptionBodyParam, metadata: types.UpcomingPeriodSubscriptionMetadataParam): Promise<FetchResponse<200, types.UpcomingPeriodSubscriptionResponse200>>;
    upcoming_period_subscription(metadata: types.UpcomingPeriodSubscriptionMetadataParam): Promise<FetchResponse<200, types.UpcomingPeriodSubscriptionResponse200>>;
    /**
     * Returns a list of your swaps.
     *
     * @summary List
     */
    list_swap(metadata?: types.ListSwapMetadataParam): Promise<FetchResponse<200, types.ListSwapResponse200>>;
    /**
     * Creates a new swap.
     *
     * @summary Create
     */
    create_swap(body?: types.CreateSwapBodyParam): Promise<FetchResponse<200, types.CreateSwapResponse200>>;
    /**
     * Retrieves details of a specific swap.
     *
     * @summary Retrieve
     */
    retrieve_swap(metadata: types.RetrieveSwapMetadataParam): Promise<FetchResponse<200, types.RetrieveSwapResponse200>>;
    /**
     * Updates a specific swap.
     *
     * @summary Update
     */
    update_swap(body: types.UpdateSwapBodyParam, metadata: types.UpdateSwapMetadataParam): Promise<FetchResponse<200, types.UpdateSwapResponse200>>;
    update_swap(metadata: types.UpdateSwapMetadataParam): Promise<FetchResponse<200, types.UpdateSwapResponse200>>;
    /**
     * Deletes a specific swap.
     *
     * @summary Delete
     */
    delete_swap(metadata: types.DeleteSwapMetadataParam): Promise<FetchResponse<200, types.DeleteSwapResponse200>>;
    /**
     * Returns a list of your tax overrides.
     *
     * @summary List
     */
    list_tax_override(metadata?: types.ListTaxOverrideMetadataParam): Promise<FetchResponse<200, types.ListTaxOverrideResponse200>>;
    /**
     * Creates a new tax override.
     *
     * @summary Create
     */
    create_tax_override(body?: types.CreateTaxOverrideBodyParam): Promise<FetchResponse<200, types.CreateTaxOverrideResponse200>>;
    /**
     * Retrieves details of a specific tax override.
     *
     * @summary Retrieve
     */
    retrieve_tax_override(metadata: types.RetrieveTaxOverrideMetadataParam): Promise<FetchResponse<200, types.RetrieveTaxOverrideResponse200>>;
    /**
     * Updates a specific tax override.
     *
     * @summary Update
     */
    update_tax_override(body: types.UpdateTaxOverrideBodyParam, metadata: types.UpdateTaxOverrideMetadataParam): Promise<FetchResponse<200, types.UpdateTaxOverrideResponse200>>;
    update_tax_override(metadata: types.UpdateTaxOverrideMetadataParam): Promise<FetchResponse<200, types.UpdateTaxOverrideResponse200>>;
    /**
     * Deletes a specific tax override.
     *
     * @summary Delete
     */
    delete_tax_override(metadata: types.DeleteTaxOverrideMetadataParam): Promise<FetchResponse<200, types.DeleteTaxOverrideResponse200>>;
    /**
     * Retrieves details of the current account's tax protocol.
     *
     * @summary Retrieve
     */
    retrieve_tax_protocol(): Promise<FetchResponse<200, types.RetrieveTaxProtocolResponse200>>;
    /**
     * Updates the current account's tax protocol.
     *
     * @summary Update
     */
    update_tax_protocol(body?: types.UpdateTaxProtocolBodyParam): Promise<FetchResponse<200, types.UpdateTaxProtocolResponse200>>;
    /**
     * Returns a list of your tax registrations.
     *
     * @summary List
     */
    list_tax_registration(metadata?: types.ListTaxRegistrationMetadataParam): Promise<FetchResponse<200, types.ListTaxRegistrationResponse200>>;
    /**
     * Creates a new tax registration.
     *
     * @summary Create
     */
    create_tax_registration(body?: types.CreateTaxRegistrationBodyParam): Promise<FetchResponse<200, types.CreateTaxRegistrationResponse200>>;
    /**
     * Retrieves details of a specific tax registration.
     *
     * @summary Retrieve
     */
    retrieve_tax_registration(metadata: types.RetrieveTaxRegistrationMetadataParam): Promise<FetchResponse<200, types.RetrieveTaxRegistrationResponse200>>;
    /**
     * Updates a specific tax registration.
     *
     * @summary Update
     */
    update_tax_registration(body: types.UpdateTaxRegistrationBodyParam, metadata: types.UpdateTaxRegistrationMetadataParam): Promise<FetchResponse<200, types.UpdateTaxRegistrationResponse200>>;
    update_tax_registration(metadata: types.UpdateTaxRegistrationMetadataParam): Promise<FetchResponse<200, types.UpdateTaxRegistrationResponse200>>;
    /**
     * Deletes a specific tax registration.
     *
     * @summary Delete
     */
    delete_tax_registration(metadata: types.DeleteTaxRegistrationMetadataParam): Promise<FetchResponse<200, types.DeleteTaxRegistrationResponse200>>;
    /**
     * Returns a list of all available tax zones.
     *
     * @summary List
     */
    list_tax_zone(metadata?: types.ListTaxZoneMetadataParam): Promise<FetchResponse<200, types.ListTaxZoneResponse200>>;
    /**
     * Returns a list of your trackings.
     *
     * @summary List
     */
    list_tracking(metadata?: types.ListTrackingMetadataParam): Promise<FetchResponse<200, types.ListTrackingResponse200>>;
    /**
     * Retrieves details of a specific tracking.
     *
     * @summary Retrieve
     */
    retrieve_tracking(metadata: types.RetrieveTrackingMetadataParam): Promise<FetchResponse<200, types.RetrieveTrackingResponse200>>;
    /**
     * Returns a list of your upsell funnels.
     *
     * @summary List
     */
    list_upsell_funnel(metadata?: types.ListUpsellFunnelMetadataParam): Promise<FetchResponse<200, types.ListUpsellFunnelResponse200>>;
    /**
     * Creates a new upsell funnel.
     *
     * @summary Create
     */
    create_upsell_funnel(body?: types.CreateUpsellFunnelBodyParam): Promise<FetchResponse<200, types.CreateUpsellFunnelResponse200>>;
    /**
     * Retrieves details of a specific upsell funnel.
     *
     * @summary Retrieve
     */
    retrieve_upsell_funnel(metadata: types.RetrieveUpsellFunnelMetadataParam): Promise<FetchResponse<200, types.RetrieveUpsellFunnelResponse200>>;
    /**
     * Updates a specific upsell funnel.
     *
     * @summary Update
     */
    update_upsell_funnel(body: types.UpdateUpsellFunnelBodyParam, metadata: types.UpdateUpsellFunnelMetadataParam): Promise<FetchResponse<200, types.UpdateUpsellFunnelResponse200>>;
    update_upsell_funnel(metadata: types.UpdateUpsellFunnelMetadataParam): Promise<FetchResponse<200, types.UpdateUpsellFunnelResponse200>>;
    /**
     * Deletes a specific upsell funnel.
     *
     * @summary Delete
     */
    delete_upsell_funnel(metadata: types.DeleteUpsellFunnelMetadataParam): Promise<FetchResponse<200, types.DeleteUpsellFunnelResponse200>>;
    /**
     * Duplicates a specific upsell funnel.
     *
     * @summary Duplicate
     */
    duplicate_upsell_funnel(metadata: types.DuplicateUpsellFunnelMetadataParam): Promise<FetchResponse<200, types.DuplicateUpsellFunnelResponse200>>;
    /**
     * Returns a list of your upsells.
     *
     * @summary List
     */
    list_upsell(metadata?: types.ListUpsellMetadataParam): Promise<FetchResponse<200, types.ListUpsellResponse200>>;
    /**
     * Creates a new upsell.
     *
     * @summary Create
     */
    create_upsell(body?: types.CreateUpsellBodyParam): Promise<FetchResponse<200, types.CreateUpsellResponse200>>;
    /**
     * Retrieves details of a specific upsell.
     *
     * @summary Retrieve
     */
    retrieve_upsell(metadata: types.RetrieveUpsellMetadataParam): Promise<FetchResponse<200, types.RetrieveUpsellResponse200>>;
    /**
     * Updates a specific upsell.
     *
     * @summary Update
     */
    update_upsell(body: types.UpdateUpsellBodyParam, metadata: types.UpdateUpsellMetadataParam): Promise<FetchResponse<200, types.UpdateUpsellResponse200>>;
    update_upsell(metadata: types.UpdateUpsellMetadataParam): Promise<FetchResponse<200, types.UpdateUpsellResponse200>>;
    /**
     * Deletes a specific upsell.
     *
     * @summary Delete
     */
    delete_upsell(metadata: types.DeleteUpsellMetadataParam): Promise<FetchResponse<200, types.DeleteUpsellResponse200>>;
    /**
     * Returns a list of your variant options.
     *
     * @summary List
     */
    list_variant_option(metadata?: types.ListVariantOptionMetadataParam): Promise<FetchResponse<200, types.ListVariantOptionResponse200>>;
    /**
     * Retrieves details of a specific variant option.
     *
     * @summary Retrieve
     */
    retrieve_variant_option(metadata: types.RetrieveVariantOptionMetadataParam): Promise<FetchResponse<200, types.RetrieveVariantOptionResponse200>>;
    /**
     * Returns a list of your variants.
     *
     * @summary List
     */
    list_variant(metadata?: types.ListVariantMetadataParam): Promise<FetchResponse<200, types.ListVariantResponse200>>;
    /**
     * Creates a new variant.
     *
     * @summary Create
     */
    create_variant(body?: types.CreateVariantBodyParam): Promise<FetchResponse<200, types.CreateVariantResponse200>>;
    /**
     * Retrieves details of a specific variant.
     *
     * @summary Retrieve
     */
    retrieve_variant(metadata: types.RetrieveVariantMetadataParam): Promise<FetchResponse<200, types.RetrieveVariantResponse200>>;
    /**
     * Updates a specific variant.
     *
     * @summary Update
     */
    update_variant(body: types.UpdateVariantBodyParam, metadata: types.UpdateVariantMetadataParam): Promise<FetchResponse<200, types.UpdateVariantResponse200>>;
    update_variant(metadata: types.UpdateVariantMetadataParam): Promise<FetchResponse<200, types.UpdateVariantResponse200>>;
    /**
     * Deletes a specific variant.
     *
     * @summary Delete
     */
    delete_variant(metadata: types.DeleteVariantMetadataParam): Promise<FetchResponse<200, types.DeleteVariantResponse200>>;
    /**
     * Creates a new verification code.
     *
     * @summary Create
     */
    create_verification_code(body?: types.CreateVerificationCodeBodyParam): Promise<FetchResponse<200, types.CreateVerificationCodeResponse200>>;
    /**
     * Verifies a verification code.
     *
     * @summary Verify
     */
    verify_verification_code(body?: types.VerifyVerificationCodeBodyParam): Promise<FetchResponse<200, types.VerifyVerificationCodeResponse200>>;
    /**
     * Returns a list of your webhook endpoints.
     *
     * @summary List
     */
    list_webhook_endpoint(metadata?: types.ListWebhookEndpointMetadataParam): Promise<FetchResponse<200, types.ListWebhookEndpointResponse200>>;
    /**
     * Creates a new webhook endpoint. If a webhook endpoint already exists with the same `url`
     * then it will be updated and returned.
     *
     * @summary Create
     */
    create_webhook_endpoint(body?: types.CreateWebhookEndpointBodyParam): Promise<FetchResponse<200, types.CreateWebhookEndpointResponse200>>;
    /**
     * Retrieves details of a specific webhook endpoint.
     *
     * @summary Retrieve
     */
    retrieve_webhook_endpoint(metadata: types.RetrieveWebhookEndpointMetadataParam): Promise<FetchResponse<200, types.RetrieveWebhookEndpointResponse200>>;
    /**
     * Updates a specific webhook endpoint.
     *
     * @summary Update
     */
    update_webhook_endpoint(body: types.UpdateWebhookEndpointBodyParam, metadata: types.UpdateWebhookEndpointMetadataParam): Promise<FetchResponse<200, types.UpdateWebhookEndpointResponse200>>;
    update_webhook_endpoint(metadata: types.UpdateWebhookEndpointMetadataParam): Promise<FetchResponse<200, types.UpdateWebhookEndpointResponse200>>;
    /**
     * Deletes a specific webhook endpoint.
     *
     * @summary Delete
     */
    delete_webhook_endpoint(metadata: types.DeleteWebhookEndpointMetadataParam): Promise<FetchResponse<200, types.DeleteWebhookEndpointResponse200>>;
    /**
     * Sends a test webhook for the specific webhook endpoint.
     *
     * @summary Test
     */
    test_webhook_endpoint(metadata: types.TestWebhookEndpointMetadataParam): Promise<FetchResponse<200, types.TestWebhookEndpointResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
