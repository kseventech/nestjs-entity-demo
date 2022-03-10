import { Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Request, Response } from 'express';
import os from 'os';
import dotenv from 'dotenv';

dotenv.config();

@Catch()
export class InternalServerExceptionFilter extends BaseExceptionFilter {
  override async catch(exception: NodeJS.ErrnoException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    // const req = ctx.getRequest<Request>()
    // const res = ctx.getResponse<Response>()
    // const methodKey = ctx.getHandler().name; // "create"
    // const className = ctx.getClass().name; // "CatsController"

    // const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    // console.log(response.json({here:"hetere"}),"heeeeeeee")
    // console.log(response.)
    super.catch(exception, host);
  }
}