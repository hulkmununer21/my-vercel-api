# API Documentation

## Overview

This document provides an overview of the API endpoints available in the project. Each section outlines the purpose of the endpoints, the request methods, and the expected responses.

## Base URL

The base URL for all API endpoints is:

```
https://your-api-url.com/api
```

## Endpoints

### Health Check

- **Endpoint:** `/health`
- **Method:** `GET`
- **Description:** Checks the health status of the API.
- **Response:**
  - **200 OK:** Returns a status indicating the service is running.

### Authentication

#### User Profile

- **Endpoint:** `/auth/profile`
- **Method:** `GET`
- **Description:** Retrieves the user profile information.
- **Response:**
  - **200 OK:** Returns user profile data.

- **Endpoint:** `/auth/profile`
- **Method:** `PUT`
- **Description:** Updates the user profile information.
- **Response:**
  - **200 OK:** Returns updated user profile data.

#### User Roles

- **Endpoint:** `/auth/roles`
- **Method:** `GET`
- **Description:** Retrieves a list of user roles.
- **Response:**
  - **200 OK:** Returns an array of user roles.

### Properties

#### List Properties

- **Endpoint:** `/properties`
- **Method:** `GET`
- **Description:** Retrieves a list of properties.
- **Response:**
  - **200 OK:** Returns an array of properties.

#### Property by ID

- **Endpoint:** `/properties/{id}`
- **Method:** `GET`
- **Description:** Retrieves a specific property by ID.
- **Response:**
  - **200 OK:** Returns property data.
  - **404 Not Found:** If the property does not exist.

### Units

#### List Units

- **Endpoint:** `/units`
- **Method:** `GET`
- **Description:** Retrieves a list of units.
- **Response:**
  - **200 OK:** Returns an array of units.

#### Unit by ID

- **Endpoint:** `/units/{id}`
- **Method:** `GET`
- **Description:** Retrieves a specific unit by ID.
- **Response:**
  - **200 OK:** Returns unit data.
  - **404 Not Found:** If the unit does not exist.

### Applications

#### List Applications

- **Endpoint:** `/applications`
- **Method:** `GET`
- **Description:** Retrieves a list of applications.
- **Response:**
  - **200 OK:** Returns an array of applications.

#### Application by ID

- **Endpoint:** `/applications/{id}`
- **Method:** `GET`
- **Description:** Retrieves a specific application by ID.
- **Response:**
  - **200 OK:** Returns application data.
  - **404 Not Found:** If the application does not exist.

### Leases

#### List Leases

- **Endpoint:** `/leases`
- **Method:** `GET`
- **Description:** Retrieves a list of leases.
- **Response:**
  - **200 OK:** Returns an array of leases.

#### Lease by ID

- **Endpoint:** `/leases/{id}`
- **Method:** `GET`
- **Description:** Retrieves a specific lease by ID.
- **Response:**
  - **200 OK:** Returns lease data.
  - **404 Not Found:** If the lease does not exist.

### Invoices

#### List Invoices

- **Endpoint:** `/invoices`
- **Method:** `GET`
- **Description:** Retrieves a list of invoices.
- **Response:**
  - **200 OK:** Returns an array of invoices.

#### Invoice by ID

- **Endpoint:** `/invoices/{id}`
- **Method:** `GET`
- **Description:** Retrieves a specific invoice by ID.
- **Response:**
  - **200 OK:** Returns invoice data.
  - **404 Not Found:** If the invoice does not exist.

### Payments

#### List Payments

- **Endpoint:** `/payments`
- **Method:** `GET`
- **Description:** Retrieves a list of payments.
- **Response:**
  - **200 OK:** Returns an array of payments.

#### Payment by ID

- **Endpoint:** `/payments/{id}`
- **Method:** `GET`
- **Description:** Retrieves a specific payment by ID.
- **Response:**
  - **200 OK:** Returns payment data.
  - **404 Not Found:** If the payment does not exist.

### Complaints

#### List Complaints

- **Endpoint:** `/complaints`
- **Method:** `GET`
- **Description:** Retrieves a list of complaints.
- **Response:**
  - **200 OK:** Returns an array of complaints.

#### Complaint by ID

- **Endpoint:** `/complaints/{id}`
- **Method:** `GET`
- **Description:** Retrieves a specific complaint by ID.
- **Response:**
  - **200 OK:** Returns complaint data.
  - **404 Not Found:** If the complaint does not exist.

### Inspections

#### List Inspections

- **Endpoint:** `/inspections`
- **Method:** `GET`
- **Description:** Retrieves a list of inspections.
- **Response:**
  - **200 OK:** Returns an array of inspections.

#### Inspection by ID

- **Endpoint:** `/inspections/{id}`
- **Method:** `GET`
- **Description:** Retrieves a specific inspection by ID.
- **Response:**
  - **200 OK:** Returns inspection data.
  - **404 Not Found:** If the inspection does not exist.

### Maintenance

#### List Maintenance Requests

- **Endpoint:** `/maintenance`
- **Method:** `GET`
- **Description:** Retrieves a list of maintenance requests.
- **Response:**
  - **200 OK:** Returns an array of maintenance requests.

#### Maintenance Request by ID

- **Endpoint:** `/maintenance/{id}`
- **Method:** `GET`
- **Description:** Retrieves a specific maintenance request by ID.
- **Response:**
  - **200 OK:** Returns maintenance request data.
  - **404 Not Found:** If the maintenance request does not exist.

### Vendors

#### List Vendors

- **Endpoint:** `/vendors`
- **Method:** `GET`
- **Description:** Retrieves a list of vendors.
- **Response:**
  - **200 OK:** Returns an array of vendors.

#### Vendor by ID

- **Endpoint:** `/vendors/{id}`
- **Method:** `GET`
- **Description:** Retrieves a specific vendor by ID.
- **Response:**
  - **200 OK:** Returns vendor data.
  - **404 Not Found:** If the vendor does not exist.

### Messaging

#### List Conversations

- **Endpoint:** `/messaging/conversations`
- **Method:** `GET`
- **Description:** Retrieves a list of conversations.
- **Response:**
  - **200 OK:** Returns an array of conversations.

#### Conversation by ID

- **Endpoint:** `/messaging/conversations/{id}`
- **Method:** `GET`
- **Description:** Retrieves a specific conversation by ID.
- **Response:**
  - **200 OK:** Returns conversation data.
  - **404 Not Found:** If the conversation does not exist.

### Notifications

#### List Notifications

- **Endpoint:** `/notifications`
- **Method:** `GET`
- **Description:** Retrieves a list of notifications.
- **Response:**
  - **200 OK:** Returns an array of notifications.

### Calendar

#### List Calendar Events

- **Endpoint:** `/calendar`
- **Method:** `GET`
- **Description:** Retrieves a list of calendar events.
- **Response:**
  - **200 OK:** Returns an array of calendar events.

#### Calendar Event by ID

- **Endpoint:** `/calendar/{id}`
- **Method:** `GET`
- **Description:** Retrieves a specific calendar event by ID.
- **Response:**
  - **200 OK:** Returns calendar event data.
  - **404 Not Found:** If the calendar event does not exist.

### CMS

#### List Pages

- **Endpoint:** `/cms/pages`
- **Method:** `GET`
- **Description:** Retrieves a list of CMS pages.
- **Response:**
  - **200 OK:** Returns an array of CMS pages.

#### Page by Slug

- **Endpoint:** `/cms/pages/{slug}`
- **Method:** `GET`
- **Description:** Retrieves a specific CMS page by slug.
- **Response:**
  - **200 OK:** Returns CMS page data.
  - **404 Not Found:** If the CMS page does not exist.

### Campaigns

#### List Campaigns

- **Endpoint:** `/campaigns`
- **Method:** `GET`
- **Description:** Retrieves a list of campaigns.
- **Response:**
  - **200 OK:** Returns an array of campaigns.

#### Campaign by ID

- **Endpoint:** `/campaigns/{id}`
- **Method:** `GET`
- **Description:** Retrieves a specific campaign by ID.
- **Response:**
  - **200 OK:** Returns campaign data.
  - **404 Not Found:** If the campaign does not exist.

### GDPR

#### Consents

- **Endpoint:** `/gdpr/consents`
- **Method:** `GET`
- **Description:** Manages GDPR consent-related operations.
- **Response:**
  - **200 OK:** Returns consent data.

#### GDPR Requests

- **Endpoint:** `/gdpr/requests`
- **Method:** `GET`
- **Description:** Retrieves a list of GDPR requests.
- **Response:**
  - **200 OK:** Returns an array of GDPR requests.

#### GDPR Request by ID

- **Endpoint:** `/gdpr/requests/{id}`
- **Method:** `GET`
- **Description:** Retrieves a specific GDPR request by ID.
- **Response:**
  - **200 OK:** Returns GDPR request data.
  - **404 Not Found:** If the GDPR request does not exist.

### Webhooks

#### Stripe Webhook

- **Endpoint:** `/webhooks/stripe`
- **Method:** `POST`
- **Description:** Handles Stripe webhook events.
- **Response:**
  - **200 OK:** Acknowledges receipt of the event.

#### PayPal Webhook

- **Endpoint:** `/webhooks/paypal`
- **Method:** `POST`
- **Description:** Handles PayPal webhook events.
- **Response:**
  - **200 OK:** Acknowledges receipt of the event.

#### Flutterwave Webhook

- **Endpoint:** `/webhooks/flutterwave`
- **Method:** `POST`
- **Description:** Handles Flutterwave webhook events.
- **Response:**
  - **200 OK:** Acknowledges receipt of the event.

#### WhatsApp Webhook

- **Endpoint:** `/webhooks/whatsapp`
- **Method:** `POST`
- **Description:** Handles WhatsApp webhook events.
- **Response:**
  - **200 OK:** Acknowledges receipt of the event.

## Conclusion

This API documentation provides a comprehensive overview of the available endpoints. For further details on request parameters and response formats, please refer to the individual endpoint documentation.