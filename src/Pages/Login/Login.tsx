import { VisibilityOff, Visibility } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputWithLogo from '../../Components/InputWithLogo/InputWithLogo';
import InputAdornment from '../../Components/InputWithLogo/InputAdornment/InputAdornment';
import Button from '../../Components/Button/Button';
import { useLoginMutation } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../state/user';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading, isSuccess, data }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
      username: '',
    },
  });
  useEffect(() => {
    if (isSuccess) {
      console.log(data);

      if (data) dispatch(setUser(data));
      navigate('/home');
    }
  }, [data]);

  const onSubmit = async (data: any) => {
    await login(data);
  };
  return (
    <div className="w-screen h-screen bg-background-login overflow-auto grid grid-cols-2 mobile:grid-cols-1 ">
      <div className="mobile:hidden overflow-hidden  h-full">
        <img
          className="h-full w-full"
          src="/images/login/img-web1.png"
          alt="doctor logo"
        />
      </div>
      <div className="mobile:p-3 flex flex-col justify-center items-center ">
        <img
          className=" h-[32px] w-[250px]"
          src="/images/login/Logo.png"
          alt="doom logo"
        />
        <div className=" mt-[5px] text-[22px] text-center ">
          welcome back!,please login to your account.
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-[30px] flex flex-col gap-[40px]"
        >
          <div className=" flex flex-col gap-4">
            <Controller
              name="username"
              control={control}
              rules={{
                required: { value: true, message: 'Username is required' },
              }}
              render={({ field }) => {
                return (
                  <>
                    <InputWithLogo
                      {...field}
                      startIcon={
                        <InputAdornment position="end">
                          <img src="/icons/login/ic_user.svg" alt="" />
                        </InputAdornment>
                      }
                      containerWidth=" mobile:w-[320px] w-[358px] "
                      className="   "
                      label="Username or phone "
                      error={errors.username ? true : false}
                    />
                    <div className=" text-red-600 text-[10px]">
                      {errors?.username?.message}
                    </div>
                  </>
                );
              }}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                required: { value: true, message: 'Password is required' },
                minLength: { value: 8, message: 'Password min length is 8' },
              }}
              render={({ field }) => {
                return (
                  <>
                    <InputWithLogo
                      {...field}
                      startIcon={
                        <InputAdornment position="end">
                          <img src="/icons/login/ic_password.svg" alt="" />
                        </InputAdornment>
                      }
                      className=""
                      containerWidth=" mobile:w-[320px] w-[358px] "
                      label="password"
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment
                          onClick={() => setShowPassword(!showPassword)}
                          position="end"
                        >
                          <>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </>
                        </InputAdornment>
                      }
                      error={errors.password ? true : false}
                    />
                    <div className=" text-red-600 text-[10px]">
                      {errors?.password?.message}
                    </div>
                  </>
                );
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Checkbox defaultChecked />
              Remember me
            </div>
            Forgot password
          </div>
          <div className="flex justify-between items-center">
            <Button
              variant="outlined"
              onClick={() => {
                navigate('/home');
              }}
              className=" mobile:w-[140px]  w-[160px] "
              content="Register"
            />
            <Button
              type="submit"
              className=" mobile:w-[140px]  w-[160px] "
              loading={isLoading}
              content="Login"
            />
          </div>
        </form>
        <div className="mt-[40px]">
          By signing up you agree ore{' '}
          <a className="border-b border-b-1 border-black " href="">
            Privacy Policy & Terms
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
