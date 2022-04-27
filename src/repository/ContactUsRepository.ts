import {autoInjectable} from "tsyringe";
import ContactUs from "../dto/ContactUs";
import ContactUsEntity from "./entity/ContactUsEntity";
import AppUtils from "../utils/AppUtils";
import {instanceToPlain, plainToInstance} from "class-transformer";

@autoInjectable()
export default class ContactUsRepository {
    public async saveContactUs(contactUs: ContactUs): Promise<ContactUs> {
        const contactUsEntity = new ContactUsEntity(AppUtils.nullPropsRemover(instanceToPlain(contactUs)));
        await contactUsEntity.save();
        return plainToInstance(ContactUs, contactUsEntity, {excludeExtraneousValues: true});
    }
}