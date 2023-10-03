package br.com.hackforchange.bean;

public class Anamnese {

	private int idAnamnese;
	private int idAluno;
	private String primeiraInteracao;
	private String segundaInteracao;
	private String terceiraInteracao;
	
	public Anamnese() {
		
	}

	public Anamnese(int idAnamnese, int idAluno, String primeiraInteracao, String segundaInteracao,
			String terceiraInteracao) {
		this.idAnamnese = idAnamnese;
		this.idAluno = idAluno;
		this.primeiraInteracao = primeiraInteracao;
		this.segundaInteracao = segundaInteracao;
		this.terceiraInteracao = terceiraInteracao;
	}

	public int getIdAnamnese() {
		return idAnamnese;
	}

	public void setIdAnamnese(int idAnamnese) {
		this.idAnamnese = idAnamnese;
	}

	public int getIdAluno() {
		return idAluno;
	}

	public void setIdAluno(int idAluno) {
		this.idAluno = idAluno;
	}

	public String getPrimeiraInteracao() {
		return primeiraInteracao;
	}

	public void setPrimeiraInteracao(String primeiraInteracao) {
		this.primeiraInteracao = primeiraInteracao;
	}

	public String getSegundaInteracao() {
		return segundaInteracao;
	}

	public void setSegundaInteracao(String segundaInteracao) {
		this.segundaInteracao = segundaInteracao;
	}

	public String getTerceiraInteracao() {
		return terceiraInteracao;
	}

	public void setTerceiraInteracao(String terceiraInteracao) {
		this.terceiraInteracao = terceiraInteracao;
	}
	
}
