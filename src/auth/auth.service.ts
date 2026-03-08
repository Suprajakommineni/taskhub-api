import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService) {}

  async register(email: string, password: string) {

    const hashedPassword = await bcrypt.hash(password, 10);

    return {
      message: "User registered",
      email: email,
      password: hashedPassword
    };
  }

  async login(email: string, password: string) {

    const payload = { email: email };

    const token = this.jwtService.sign(payload);

    return {
      message: "Login successful",
      access_token: token
    };
  }

}