package br.com.hackforchange.bean;

public class Aluno {

	private int idAluno;
	private String nome;
	private String dataNasc;
	private String endereco;
	private String escola;
	private String serie;
	
	public Aluno() {
		
	}

	public Aluno(int idAluno, String nome, String dataNasc, String endereco, String escola, String serie) {
		this.idAluno = idAluno;
		this.nome = nome;
		this.dataNasc = dataNasc;
		this.endereco = endereco;
		this.escola = escola;
		this.serie = serie;
	}

	public int getIdAluno() {
		return idAluno;
	}

	public void setIdAluno(int idAluno) {
		this.idAluno = idAluno;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDataNasc() {
		return dataNasc;
	}

	public void setDataNasc(String dataNasc) {
		this.dataNasc = dataNasc;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getEscola() {
		return escola;
	}

	public void setEscola(String escola) {
		this.escola = escola;
	}

	public String getSerie() {
		return serie;
	}

	public void setSerie(String serie) {
		this.serie = serie;
	}
	
}
