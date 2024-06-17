import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';

import styles from '@/components/Promotion/Promotion.module.scss';
import Wrapper from '@/components/Wrapper/Wrapper';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SectionText from '@/components/SectionText/SectionText';
import FormWrapper from '@/components/Forms/FormWrapper/FormWrapper';
import FormField from '@/components/Forms/FormField/FormField';
import FileUpload from '@/components/Forms/FileUpload/FileUpload';
import SubmitButton from '@/components/Forms/SubmitButton/SubmitButton';
import Checkbox from '@/components/Forms/CheckBox/CheckBox';

import { promoImg1 } from '../../assets/images';

interface IFormInput {
  name: string;
  email: string;
  screenshot: FileList;
  consent: boolean;
}

const Promotion: React.FC = () => {
  const [isInitialAnimationComplete, setIsInitialAnimationComplete] = useState(false);

  useEffect(() => {
    if (isInitialAnimationComplete) {
      const element = document.getElementById('rotating-image');
      if (element) {
        element.classList.add(styles.continuousSpin);
      }
    }
  }, [isInitialAnimationComplete]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log('Form submitted', data);
  };

  return (
    <section className={styles.promotion}>
      <Wrapper>
        <div className={styles.promotionHeader}>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 2, 1] }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            onAnimationComplete={() => setIsInitialAnimationComplete(true)}
          >
            <Image src={promoImg1} alt="" id="rotating-image" className={styles.promotionImg} />
          </motion.div>
          <SectionTitle color="#fff" margin="0">
            Играй и выигрывай!
          </SectionTitle>
        </div>
        <SectionText color="#fff" margin="0 0 25px 0">
          Играй в <span>Cyberpunk 2077</span> и получи возможность выиграть консоль{' '}
          <span>Xbox Series X</span> или <span>Sony PlayStation 5!</span> Заполни форму ниже и
          приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)
        </SectionText>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <FormField
            placeholder="Как тебя зовут?"
            type="text"
            name="name"
            register={register}
            required
            errors={errors}
          />
          <FormField
            placeholder="Твой e-mail"
            type="email"
            name="email"
            register={register}
            required
            errors={errors}
          />
          <FileUpload register={register} />
          <SubmitButton text="Отправить" />
          <Checkbox
            id="consent"
            name="consent"
            label="Согласен на обработку персональных данных"
            register={register}
            required
            errors={errors}
          />
        </FormWrapper>
      </Wrapper>
    </section>
  );
};

export default Promotion;
