import { api } from "@api/api";
import { ISimplePost } from "@myModels/api/MSimplePost";
import { BaseApiResponseType } from '@myModels/api/BaseApiTypes';

export const apiTags = {
    phone_enter: "user/login",
    get_token: "authentication_token",
    edit_user: "user/profile",
    userSetPickUpPoint: (id: string) => `user/attach/organization/${id}`,
    userSetDeliveryPoint: (id: number) => `user/attach/current_delivery_point/${id}`,
    userSetDeliveryType: (val: string) => `user/attach/current_order_type/${val}`
};

export async function simplePost({path, data}: ISimplePost) {
    if (path && data) {
        const response = await api.post<BaseApiResponseType>(path, data);
        return response.data;
    }
    else {
        console.log("Неверная форма запроса")
        return null
    }
}
export default simplePost