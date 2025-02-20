"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";

export function Login() {
  const { register } = useForm();

  return (
    <form>
      <div className="flex flex-col justify-center items-center mt-5">
        <Card className="w-[350px] ">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label>Username</Label>
                <Input
                  {...register("userName", { required: true })}
                  placeholder="Name of your project"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Password</Label>
                <Input
                  {...register("password", { required: true })}
                  placeholder="Password"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Confirm Password</Label>
                <Input
                  {...register("confirmedPassword", { required: true })}
                  placeholder="Confirm Your Password"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"/"}>
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button type="submit">Login</Button>
          </CardFooter>
          <CardFooter className="flex justify-between">
            <Link href={"/auth/login"}>
              <p className="underline cursor-pointer">Already registered?</p>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
}

export default Login;
