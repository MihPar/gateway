import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { FileType } from "../type/file.type";

@Schema()
export class File extends Document {
	@Prop({required: true})
	userId: string

	@Prop({ required: true, enum: FileType, type: String })
	fileType: FileType;

	@Prop({ required: true })
	originalname: string;

	@Prop({ required: true })
	format: string;

	@Prop({ required: true })
	url: string;

	@Prop({ required: true })
	fileId: string;

	@Prop({ required: false })
	ownerId: string;

	@Prop({ required: false })
	expirationDate: Date;
}

export const FileSchema = SchemaFactory.createForClass(File)