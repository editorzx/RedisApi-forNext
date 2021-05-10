import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { Controller, Get, Redirect, Res } from '@nestjs/common';
import * as moment from 'moment'
import { Redis } from 'ioredis';


async function Main() {
	console.clear()
	const app = await NestFactory.create(AppModule);
	await app.enableCors(); // enable Call API
	await app.setGlobalPrefix(process.env.PROCESS_SUBURL);
	await app.use(morgan('common')); //tiny //combined //dev
	const options = new DocumentBuilder()
		.setTitle('REDIS API')
		.setDescription('KDxR')
		.setVersion('1.0')
		.build();
	
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('document', app, document);
	
	await app.listen(process.env.PORT); // port
	console.log(`========================== Api listen : ${process.env.PORT} [${process.env.MODE}] ${moment().format("DD/MM/YYYY HH:mm:ss")} ==========================`)
	
}

Main(); //start main
