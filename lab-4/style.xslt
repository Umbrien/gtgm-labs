<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
  <h2 align = "center">Породи курей</h2>
  <table border="1" align = "center">
    <tr bgcolor="yellow">
      <th>Назва</th>
      <th>Опис</th>
      <th>Категорiя</th>
      <th>Вес петуха</th>
      <th>Вес курицы</th>
      <th>Яйценоскость</th>
      <th>Особенности</th>
    </tr>
    <xsl:for-each select="breeds/breed">
    <tr text_align = "center">
    <td><xsl:value-of select="name"/></td>
    <td><xsl:value-of select="description"/></td>
      <td><xsl:value-of select="characteristics/category"/></td>
      <td><xsl:value-of select="characteristics/cock-weight"/></td>
      <td><xsl:value-of select="characteristics/hen-weigh"/></td>
       <td><xsl:value-of select="characteristics/productivity"/></td>
      <td><xsl:value-of select="characteristics/features"/></td>
    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>