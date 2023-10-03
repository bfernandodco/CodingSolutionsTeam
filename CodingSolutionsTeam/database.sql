-- MySQL Script generated by MySQL Workbench
-- Tue Oct  3 14:41:05 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema hackathlon
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hackathlon
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hackathlon` DEFAULT CHARACTER SET utf8 ;
USE `hackathlon` ;

-- -----------------------------------------------------
-- Table `hackathlon`.`Aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathlon`.`Aluno` (
  `idAluno` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `dataNasc` DATE NOT NULL,
  `escola` VARCHAR(100) NULL,
  `serie` VARCHAR(10) NULL,
  `endereco` VARCHAR(100) NULL,
  PRIMARY KEY (`idAluno`),
  UNIQUE INDEX `idAluno_UNIQUE` (`idAluno` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathlon`.`Anamnese`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathlon`.`Anamnese` (
  `idAnamnese` INT NOT NULL,
  `idAluno` INT NOT NULL,
  `primeiraInteracao` VARCHAR(100) NULL,
  `segundaInteracao` VARCHAR(100) NULL,
  `terceiraInteracao` VARCHAR(100) NULL,
  PRIMARY KEY (`idAnamnese`),
  UNIQUE INDEX `idAnamnese_UNIQUE` (`idAnamnese` ASC) VISIBLE,
  UNIQUE INDEX `idAluno_UNIQUE` (`idAluno` ASC) VISIBLE,
  CONSTRAINT `anamneseAluno`
    FOREIGN KEY (`idAluno`)
    REFERENCES `hackathlon`.`Aluno` (`idAluno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathlon`.`Saneamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathlon`.`Saneamento` (
  `idSaneamento` INT NOT NULL,
  `idAluno` INT NOT NULL,
  `quartaInteracao` VARCHAR(100) NULL,
  `quintaInteracao` VARCHAR(100) NULL,
  `sextaInteracao` VARCHAR(100) NULL,
  PRIMARY KEY (`idSaneamento`),
  UNIQUE INDEX `idSaneamento_UNIQUE` (`idSaneamento` ASC) VISIBLE,
  UNIQUE INDEX `idAluno_UNIQUE` (`idAluno` ASC) VISIBLE,
  CONSTRAINT `saneamentoAluno`
    FOREIGN KEY (`idAluno`)
    REFERENCES `hackathlon`.`Aluno` (`idAluno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
