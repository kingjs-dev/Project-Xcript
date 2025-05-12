import { Input } from "@/components/ui/input";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return(
    <>
    <div className={styles.mainbox}>
      <h1 className={styles.title}>Login | NoteVerse</h1>
      <div className={styles.formbox}>
        <form className={styles.mainform}>
          <Input className={styles.emailbox} type="email" placeholder="Nome de Usuario ou Email..." required />
          <Input className={styles.passwordbox} type="password" placeholder="Digite Sua Senha..." required />
          <button className={styles.submitbutton}>Login</button>
        </form>
      </div>
    </div>

      <div className={styles.forgotbox}>
      <div className={styles.registerbox}>
        <div className={styles.textregister}>
          Não tem uma conta? clique aqui em baixo e faça uma!
        </div>
          <div className={styles.buttonregister}>
          <button className={styles.registerbutton} onClick={() => window.location.href = "/signup"}>Registrar</button>
        </div>
      </div>
      </div>
    </>
  )
}