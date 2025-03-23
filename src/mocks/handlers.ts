import { http, HttpResponse } from "msw";
import API_PATHS from "~/constants/apiPaths";
import { availableProducts, orders, products, cart } from "~/mocks/data";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const handlers = [
  http.get(`${API_PATHS.bff}/product`, async () => {
    return HttpResponse.json<Product[]>(products);
  }),

  http.put(`${API_PATHS.bff}/product`, async () => {
    return HttpResponse.json({}, { status: 200 });
  }),

  http.delete(`${API_PATHS.bff}/product/:id`, async () => {
    return HttpResponse.json({}, { status: 200 });
  }),

  http.get(`${API_PATHS.bff}/product/available`, async () => {
    return HttpResponse.json<AvailableProduct[]>(availableProducts);
  }),

  http.get(`${API_PATHS.bff}/product/:id`, async ({ params }) => {
    const product = availableProducts.find((p) => p.id === params.id);
    if (!product) {
      return HttpResponse.json({}, { status: 404 });
    }
    return HttpResponse.json<AvailableProduct>(product);
  }),

  http.get(`${API_PATHS.cart}/profile/cart`, async () => {
    return HttpResponse.json<CartItem[]>(cart);
  }),

  http.put(`${API_PATHS.cart}/profile/cart`, async () => {
    return HttpResponse.json({}, { status: 200 });
  }),

  http.get(`${API_PATHS.order}/order`, async () => {
    return HttpResponse.json<Order[]>(orders);
  }),

  http.put(`${API_PATHS.order}/order`, async () => {
    return HttpResponse.json({}, { status: 200 });
  }),

  http.get(`${API_PATHS.order}/order/:id`, async ({ params }) => {
    const order = orders.find((p) => p.id === params.id);
    if (!order) {
      return HttpResponse.json({}, { status: 404 });
    }
    return HttpResponse.json(order);
  }),

  http.delete(`${API_PATHS.order}/order/:id`, async () => {
    return HttpResponse.json({}, { status: 200 });
  }),

  http.put(`${API_PATHS.order}/order/:id/status`, async () => {
    return HttpResponse.json({}, { status: 200 });
  }),
];
