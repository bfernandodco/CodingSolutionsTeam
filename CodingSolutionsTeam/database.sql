-- MySQL Script generated by MySQL Workbench
-- Wed Oct  4 23:22:34 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Hackathlon
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Hackathlon` ;

-- -----------------------------------------------------
-- Schema Hackathlon
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Hackathlon` DEFAULT CHARACTER SET utf8 ;
USE `Hackathlon` ;

-- -----------------------------------------------------
-- Table `Hackathlon`.`Aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Hackathlon`.`Aluno` (
  `idAluno` INT NOT NULL,
  `nome` VARCHAR(100) NOT NULL,
  `dataNascimento` DATE NOT NULL,
  `contato` VARCHAR(45) NULL,
  `escola` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idAluno`),
  UNIQUE INDEX `idaluno_UNIQUE` (`idAluno` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Hackathlon`.`EscalaKutcher`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Hackathlon`.`EscalaKutcher` (
  `idEscalaKutcher` INT NOT NULL,
  `kutcherUm` INT NOT NULL,
  `kutcherDois` INT NOT NULL,
  `kutcherTres` INT NOT NULL,
  `kutcherQuatro` INT NOT NULL,
  `kutcherCinco` INT NOT NULL,
  `kutcherSeis` INT NOT NULL,
  `kutcherSete` INT NOT NULL,
  `kutcherOito` INT NOT NULL,
  `kutcherNove` INT NOT NULL,
  `kutcherDez` INT NOT NULL,
  `kutcherOnze` INT NOT NULL,
  PRIMARY KEY (`idEscalaKutcher`),
  UNIQUE INDEX `idEscalaKutcher_UNIQUE` (`idEscalaKutcher` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Hackathlon`.`EscalaEBIA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Hackathlon`.`EscalaEBIA` (
  `idEscalaEBIA` INT NOT NULL,
  `ebiaUm` INT NULL,
  `ebiaDois` INT NULL,
  `ebiaTres` INT NULL,
  `ebiaQuatro` INT NULL,
  `ebiaCinco` INT NULL,
  `ebiaSeis` INT NULL,
  `ebiaSete` INT NULL,
  PRIMARY KEY (`idEscalaEBIA`),
  UNIQUE INDEX `idEscalaEBIA_UNIQUE` (`idEscalaEBIA` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
